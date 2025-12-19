"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ChatInput({ onSend, disabled }: { onSend: (v: string) => void; disabled?: boolean }) {
  const [value, setValue] = useState("")

  const handleSend = () => {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask something…"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend()
        }}
        disabled={disabled}
      />
      <Button onClick={handleSend} disabled={disabled}>
        Send
      </Button>
    </div>
  )
}
