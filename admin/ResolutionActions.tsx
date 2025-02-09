import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Dispute = {
  id: string
  caseId: string
  clientId: string
  lawyerId: string
  status: "open" | "resolved" | "escalated"
  createdAt: string
  updatedAt: string
  subject: string
}

type ResolutionActionsProps = {
  dispute: Dispute
  onUpdateDispute: (updatedDispute: Dispute) => void
}

export function ResolutionActions({ dispute, onUpdateDispute }: ResolutionActionsProps) {
  const [resolution, setResolution] = useState("")
  const [penalty, setPenalty] = useState("")

  const handleResolveDispute = () => {
    const updatedDispute = { ...dispute, status: "resolved" as const }
    onUpdateDispute(updatedDispute)
    // In a real application, you would also send the resolution and penalty to the backend
    console.log("Resolution:", resolution)
    console.log("Penalty:", penalty)
  }

  const handleEscalateDispute = () => {
    const updatedDispute = { ...dispute, status: "escalated" as const }
    onUpdateDispute(updatedDispute)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="resolution">Resolution</Label>
        <Textarea
          id="resolution"
          placeholder="Enter the resolution for this dispute"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="penalty">Penalty</Label>
        <Select value={penalty} onValueChange={setPenalty}>
          <SelectTrigger id="penalty">
            <SelectValue placeholder="Select a penalty (if applicable)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No penalty</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="fine">Fine</SelectItem>
            <SelectItem value="suspension">Temporary Suspension</SelectItem>
            <SelectItem value="termination">Account Termination</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleResolveDispute} disabled={dispute.status === "resolved"}>
          Resolve Dispute
        </Button>
        <Button variant="outline" onClick={handleEscalateDispute} disabled={dispute.status === "escalated"}>
          Escalate Dispute
        </Button>
      </div>
    </div>
  )
}

