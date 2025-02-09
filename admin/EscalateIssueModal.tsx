import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Case = {
  id: string
  title: string
  client: string
  lawyer: string
  status: "active" | "pending" | "closed"
  priority: "low" | "medium" | "high"
  lastUpdated: string
}

type EscalateIssueModalProps = {
  case_: Case
  onClose: () => void
  onEscalate: (escalationLevel: string, reason: string) => void
}

export function EscalateIssueModal({ case_, onClose, onEscalate }: EscalateIssueModalProps) {
  const [escalationLevel, setEscalationLevel] = useState("")
  const [reason, setReason] = useState("")

  const handleEscalate = () => {
    onEscalate(escalationLevel, reason)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escalate Issue: {case_.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="escalationLevel" className="text-right">
              Escalation Level
            </Label>
            <Select onValueChange={setEscalationLevel}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select escalation level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supervisor">Supervisor</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason" className="text-right">
              Reason
            </Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="col-span-3"
              placeholder="Explain the reason for escalation"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleEscalate}>
            Escalate Issue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

