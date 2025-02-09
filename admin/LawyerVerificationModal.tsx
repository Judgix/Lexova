"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

type Lawyer = {
  id: string
  name: string
  email: string
  specialization: string
  status: "pending" | "in_progress" | "approved" | "rejected"
  submissionDate: string
}

type LawyerVerificationModalProps = {
  lawyer: Lawyer
  onClose: () => void
  onUpdateStatus: (newStatus: Lawyer["status"]) => void
}

export function LawyerVerificationModal({ lawyer, onClose, onUpdateStatus }: LawyerVerificationModalProps) {
  const [notes, setNotes] = useState("")
  const [certificationChecked, setCertificationChecked] = useState(false)
  const [backgroundCheckChecked, setBackgroundCheckChecked] = useState(false)
  const [documentsChecked, setDocumentsChecked] = useState(false)

  const handleApprove = () => {
    onUpdateStatus("approved")
  }

  const handleReject = () => {
    onUpdateStatus("rejected")
  }

  const handleSaveProgress = () => {
    onUpdateStatus("in_progress")
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Verify Lawyer: {lawyer.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={lawyer.name} readOnly className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value={lawyer.email} readOnly className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="specialization" className="text-right">
              Specialization
            </Label>
            <Input id="specialization" value={lawyer.specialization} readOnly className="col-span-3" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="certification"
              checked={certificationChecked}
              onCheckedChange={(checked) => setCertificationChecked(checked as boolean)}
            />
            <label
              htmlFor="certification"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Certification Verified
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="background-check"
              checked={backgroundCheckChecked}
              onCheckedChange={(checked) => setBackgroundCheckChecked(checked as boolean)}
            />
            <label
              htmlFor="background-check"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Background Check Completed
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="documents"
              checked={documentsChecked}
              onCheckedChange={(checked) => setDocumentsChecked(checked as boolean)}
            />
            <label
              htmlFor="documents"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              All Required Documents Received
            </label>
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
              rows={3}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleSaveProgress}>
            Save Progress
          </Button>
          <Button variant="destructive" onClick={handleReject}>
            Reject
          </Button>
          <Button
            onClick={handleApprove}
            disabled={!certificationChecked || !backgroundCheckChecked || !documentsChecked}
          >
            Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

