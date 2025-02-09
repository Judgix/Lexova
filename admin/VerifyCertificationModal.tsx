import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Lawyer = {
  id: string
  name: string
  email: string
  specializations: string[]
  rating: number
  successRate: number
  status: "active" | "suspended" | "pending"
  certificationStatus: "verified" | "pending" | "rejected"
}

type VerifyCertificationModalProps = {
  lawyer: Lawyer
  onClose: () => void
  onVerify: (verifiedLawyer: Lawyer) => void
}

export function VerifyCertificationModal({ lawyer, onClose, onVerify }: VerifyCertificationModalProps) {
  const [certificationStatus, setCertificationStatus] = useState(lawyer.certificationStatus)
  const [notes, setNotes] = useState("")

  const handleVerify = () => {
    const verifiedLawyer = { ...lawyer, certificationStatus }
    onVerify(verifiedLawyer)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verify Certification: {lawyer.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="certificationStatus" className="text-right">
              Certification Status
            </Label>
            <Select
              value={certificationStatus}
              onValueChange={(value: "verified" | "pending" | "rejected") => setCertificationStatus(value)}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select certification status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="col-span-3"
              placeholder="Add any notes or comments about the certification verification process"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleVerify}>
            Submit Verification
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

