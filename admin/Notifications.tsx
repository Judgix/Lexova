import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "urgent",
    title: "System Maintenance",
    description: "Scheduled maintenance in 2 hours. Prepare for 30 minutes of downtime.",
  },
  {
    id: 2,
    type: "warning",
    title: "High Case Volume",
    description: "Unusually high number of new cases. Consider allocating more resources.",
  },
  {
    id: 3,
    type: "info",
    title: "New Feature Deployed",
    description: "AI-powered case matching has been enabled. Monitor for any issues.",
  },
]

export function Notifications() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Alert key={notification.id} variant={notification.type === "urgent" ? "destructive" : "default"}>
          {notification.type === "urgent" && <AlertCircle className="h-4 w-4" />}
          {notification.type === "warning" && <AlertTriangle className="h-4 w-4" />}
          {notification.type === "info" && <CheckCircle className="h-4 w-4" />}
          <AlertTitle>{notification.title}</AlertTitle>
          <AlertDescription>{notification.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

