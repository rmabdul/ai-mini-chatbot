import { useState } from "react"
import { mockAiApi } from "@/lib/mockAiApi"

export type ChatMessage =
  | { role: "user"; text: string }
  | { role: "ai"; text: string; confidence: number; disclaimer: string }

export const useChatAI = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setError(null)
    setMessages((prev) => [...prev, { role: "user", text: trimmed }])
    setLoading(true)

    try {
        const res = await mockAiApi(trimmed)
      
        if (res.status !== "SUCCESS" || !res.result) {
          setError(res.errorMessage ?? "AI service failed")
          return
        }
      
        const { reply, confidence, disclaimer } = res.result
      
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: reply,
            confidence,
            disclaimer
          }
        ])
      } catch {
        setError("Network error. Try again.")
      } finally {
        setLoading(false)
      }
      catch {
      setError("Network error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return { messages, sendMessage, loading, error }
}
