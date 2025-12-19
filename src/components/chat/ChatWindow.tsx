"use client"

import { Card } from "@/components/ui/card"
import ChatInput from "./ChatInput"
import ChatMessage from "./ChatMessage"
import { useChatAI } from "./useChatAI"
import { ThemeToggle } from "@/components/theme-toggle"


export default function ChatWindow() {
  const { messages, sendMessage, loading, error } = useChatAI()

  return (
    <Card className="
  w-full max-w-xl p-4 space-y-4
  rounded-2xl
  border border-border/50
  shadow-lg shadow-black/5
  backdrop-blur
">
      <div className="text-lg font-semibold">AI Mini Chatbot</div>
      

      <div className="h-[380px] overflow-y-auto rounded-lg border p-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground">
            Ask something like: “What is shadcn/ui?” 
          </div>
        )}

        {messages.map((m, idx) => (
          <ChatMessage key={idx} message={m} />
        ))}

        {loading && <div className="text-sm text-muted-foreground">AI is typing…</div>}
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}

      <ChatInput onSend={sendMessage} disabled={loading} />
    </Card>
  )
}
