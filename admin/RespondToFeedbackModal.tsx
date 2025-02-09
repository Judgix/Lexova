"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
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

type RespondToFeedbackModalProps = {
  feedback: Feedback
  onClose: () => void
  onRespond: (response: string) => void
}

export function RespondToFeedbackModal({ feedback, onClose, onRespond }: RespondToFeedbackModalProps) {
  const [response, setResponse] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onRespond(response)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Respond to Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="original-feedback">Original Feedback</Label>
              <p id="original-feedback" className="mt-1 text-sm text-gray-500">
                {feedback.comment}
              </p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="response" className="text-right">
                Your Response
              </Label>
              <Textarea
                id="response"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="col-span-3"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Send Response</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

