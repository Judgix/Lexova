import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Message = {
  id: string
  sender: "client" | "lawyer" | "admin"
  content: string
  timestamp: string
}

type DisputeMessagesProps = {
  disputeId: string
}

export function DisputeMessages({ disputeId }: DisputeMessagesProps) {
  // In a real application, you would fetch the messages using the disputeId
  const messages: Message[] = [
    {
      id: "1",
      sender: "client",
      content: "I have concerns about the billing for this case.",
      timestamp: "2023-06-25T10:00:00Z",
    },
    {
      id: "2",
      sender: "lawyer",
      content: "I assure you that the billing is accurate and in line with our agreement.",
      timestamp: "2023-06-25T10:30:00Z",
    },
    {
      id: "3",
      sender: "admin",
      content: "I've reviewed the billing and would like to discuss this with both parties.",
      timestamp: "2023-06-25T11:00:00Z",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex space-x-3">
              <Avatar>
                <AvatarFallback>{message.sender[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{message.sender}</h3>
                  <p className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleString()}</p>
                </div>
                <p className="text-sm text-gray-700">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

