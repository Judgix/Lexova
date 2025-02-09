import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

type EditLawyerModalProps = {
  lawyer: Lawyer
  onClose: () => void
  onSave: (updatedLawyer: Lawyer) => void
}

export function EditLawyerModal({ lawyer, onClose, onSave }: EditLawyerModalProps) {
  const [editedLawyer, setEditedLawyer] = useState(lawyer)

  const handleSave = () => {
    onSave(editedLawyer)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lawyer: {lawyer.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={editedLawyer.name}
              onChange={(e) => setEditedLawyer({ ...editedLawyer, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={editedLawyer.email}
              onChange={(e) => setEditedLawyer({ ...editedLawyer, email: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="specializations" className="text-right">
              Specializations
            </Label>
            <Select
              value={editedLawyer.specializations.join(",")}
              onValueChange={(value) => setEditedLawyer({ ...editedLawyer, specializations: value.split(",") })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select specializations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                <SelectItem value="Family Law">Family Law</SelectItem>
                <SelectItem value="Intellectual Property">Intellectual Property</SelectItem>
                <SelectItem value="Real Estate Law">Real Estate Law</SelectItem>
                <SelectItem value="Tax Law">Tax Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              value={editedLawyer.status}
              onValueChange={(value: "active" | "suspended" | "pending") =>
                setEditedLawyer({ ...editedLawyer, status: value })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

