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

type MediateDisputeModalProps = {
  case_: Case
  onClose: () => void
  onMediate: (mediationNotes: string) => void
}

export function MediateDisputeModal({ case_, onClose, onMediate }: MediateDisputeModalProps) {
  const [mediationNotes, setMediationNotes] = useState("")

  const handleMediate = () => {
    onMediate(mediationNotes)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mediate Dispute: {case_.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mediationNotes" className="text-right">
              Mediation Notes
            </Label>
            <Textarea
              id="mediationNotes"
              value={mediationNotes}
              onChange={(e) => setMediationNotes(e.target.value)}
              className="col-span-3"
              placeholder="Enter your mediation notes and proposed resolution"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleMediate}>
            Submit Mediation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

