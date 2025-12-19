export type AIResponse = {
    status: "SUCCESS" | "ERROR"
    result?: {
      reply: string
      confidence: number
      disclaimer: string
    }
    errorMessage?: string
  }
  
  export const mockAiApi = async (message: string): Promise<AIResponse> => {
    // simulate network delay
    await new Promise((res) => setTimeout(res, 800))
  
    if (message.toLowerCase().includes("error")) {
      return { status: "ERROR", errorMessage: "Simulated API failure" }
    }
  
    return {
      status: "SUCCESS",
      result: {
        reply: `Here’s a helpful answer related to: "${message}".`,
        confidence: 0.76,
        disclaimer: "AI-generated response. Please verify before action."
      }
    }
  }
  