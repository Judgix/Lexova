import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Case = {
  id: string
  title: string
  client: string
  lawyer: string
  status: "active" | "pending" | "closed"
  priority: "low" | "medium" | "high"
  lastUpdated: string
}

type NotifyLawyerModalProps = {
  case_: Case
  onClose: () => void
  onNotify: (message: string) => void
}

export function NotifyLawyerModal({ case_, onClose, onNotify }: NotifyLawyerModalProps) {
  const [message, setMessage] = useState("")

  const handleNotify = () => {
    onNotify(message)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notify Lawyer: {case_.lawyer}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="col-span-3"
              placeholder="Enter your message to the lawyer"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleNotify}>
            Send Notification
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

