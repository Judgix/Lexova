"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Message = {
  id: string
  sender: "lawyer" | "client"
  content: string
  timestamp: string
}

type MessageSectionProps = {
  caseId: string
}

export function MessageSection({ caseId }: MessageSectionProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "lawyer",
      content: "Hello, I've reviewed your case and have some initial thoughts. Can we schedule a call to discuss?",
      timestamp: "2023-06-20 10:30 AM",
    },
    {
      id: "2",
      sender: "client",
      content: "Certainly, I'm available tomorrow afternoon. What time works for you?",
      timestamp: "2023-06-20 11:45 AM",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "lawyer",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleString(),
      }
      setMessages([...messages, message])
      setNewMessage("")
      // In a real application, you would also send this message to your backend
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[300px] overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "lawyer" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex ${message.sender === "lawyer" ? "flex-row-reverse" : "flex-row"} items-start space-x-2`}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={message.sender === "lawyer" ? "/lawyer-avatar.png" : "/client-avatar.png"} />
                    <AvatarFallback>{message.sender === "lawyer" ? "L" : "C"}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`max-w-md ${message.sender === "lawyer" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-lg p-3`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

