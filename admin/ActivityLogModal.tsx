import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type ActivityLogModalProps = {
  userId: string
  onClose: () => void
}

// Mock activity log data
const mockActivityLog = [
  { id: 1, action: "Logged in", timestamp: "2023-06-20 10:30:00" },
  { id: 2, action: "Updated profile", timestamp: "2023-06-20 11:15:00" },
  { id: 3, action: "Created a new case", timestamp: "2023-06-20 14:45:00" },
  { id: 4, action: "Sent a message", timestamp: "2023-06-21 09:00:00" },
  { id: 5, action: "Logged out", timestamp: "2023-06-21 17:30:00" },
]

export function ActivityLogModal({ userId, onClose }: ActivityLogModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Activity Log for User ID: {userId}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ul className="space-y-2">
            {mockActivityLog.map((activity) => (
              <li key={activity.id} className="flex justify-between">
                <span>{activity.action}</span>
                <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

