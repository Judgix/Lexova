import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type Payment = {
  id: string
  amount: number
  status: "pending" | "approved" | "disputed"
  type: "case_payment" | "subscription" | "platform_fee"
  client: string
  lawyer: string
  date: string
}

type ApprovePaymentModalProps = {
  payment: Payment
  onClose: () => void
  onApprove: (updatedPayment: Payment) => void
}

export function ApprovePaymentModal({ payment, onClose, onApprove }: ApprovePaymentModalProps) {
  const [notes, setNotes] = useState("")

  const handleApprove = () => {
    const updatedPayment = { ...payment, status: "approved" as const }
    onApprove(updatedPayment)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Approve Payment: ${payment.amount.toFixed(2)}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Approval Notes
            </Label>
            <Input
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="col-span-3"
              placeholder="Enter any notes for approval"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleApprove}>
            Approve Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

