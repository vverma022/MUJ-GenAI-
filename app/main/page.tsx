"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendIcon } from 'lucide-react'

export default function SimpleChatbox() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSend = () => {
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <ScrollArea className="flex-1 mb-4">
      </ScrollArea>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border"
        />
        <Button onClick={handleSend} size="lg">
          <SendIcon className="h-6 w-6" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}