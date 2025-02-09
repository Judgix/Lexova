"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Feedback = {
  id: string
  type: "user" | "lawyer"
  rating: number
  comment: string
  status: "pending" | "responded" | "flagged"
  authorId: string
  authorName: string
  createdAt: string
}

type EditFeedbackModalProps = {
  feedback: Feedback
  onClose: () => void
  onSave: (updatedFeedback: Feedback) => void
}

export function EditFeedbackModal({ feedback, onClose, onSave }: EditFeedbackModalProps) {
  const [editedFeedback, setEditedFeedback] = useState(feedback)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedFeedback)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                min="1"
                max="5"
                value={editedFeedback.rating}
                onChange={(e) => setEditedFeedback({ ...editedFeedback, rating: Number.parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="comment" className="text-right">
                Comment
              </Label>
              <Textarea
                id="comment"
                value={editedFeedback.comment}
                onChange={(e) => setEditedFeedback({ ...editedFeedback, comment: e.target.value })}
                className="col-span-3"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

