import { Badge } from "@/components/ui/badge"

export default function ChatMessage({ message }: { message: any }) {
  const isAI = message.role === "ai"

  return (
    <div className={isAI ? "flex justify-start" : "flex justify-end"}>
      <div
        className={[
          "max-w-[85%] rounded-xl px-3 py-2 text-sm",
          isAI ? "bg-muted" : "bg-primary text-primary-foreground"
        ].join(" ")}
      >
        <div>{message.text}</div>

        {isAI && (
          <div className="mt-2 space-y-1">
            <Badge variant="secondary">Weather is very location-specific, so once you tell me the city</Badge>
            <div className="text-xs text-muted-foreground">
              {message.disclaimer}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
