import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Payment = {
  id: string
  amount: number
  status: "pending" | "approved" | "disputed"
  type: "case_payment" | "subscription" | "platform_fee"
  client: string
  lawyer: string
  date: string
}

type DisputePaymentModalProps = {
  payment: Payment
  onClose: () => void
  onDispute: (updatedPayment: Payment) => void
}

export function DisputePaymentModal({ payment, onClose, onDispute }: DisputePaymentModalProps) {
  const [reason, setReason] = useState("")

  const handleDispute = () => {
    const updatedPayment = { ...payment, status: "disputed" as const }
    onDispute(updatedPayment)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dispute Payment: ${payment.amount.toFixed(2)}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason" className="text-right">
              Dispute Reason
            </Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="col-span-3"
              placeholder="Enter the reason for disputing this payment"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleDispute}>
            Dispute Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

