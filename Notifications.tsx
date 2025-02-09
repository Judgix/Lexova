import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, MessageSquare } from "lucide-react"

const notifications = [
  { id: "1", type: "new_request", message: "New case request: Contract Review" },
  { id: "2", type: "message", message: "New message from John Doe regarding Case #1234" },
  { id: "3", type: "new_request", message: "New case request: Intellectual Property Consultation" },
  { id: "4", type: "message", message: "New message from Sarah Smith regarding Case #5678" },
]

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-start space-x-2">
              {notification.type === "new_request" ? (
                <Bell className="h-5 w-5 mt-0.5 text-blue-500" />
              ) : (
                <MessageSquare className="h-5 w-5 mt-0.5 text-green-500" />
              )}
              <span className="text-sm">{notification.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

