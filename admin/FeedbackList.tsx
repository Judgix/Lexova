"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Flag, Trash2 } from "lucide-react"
import { RespondToFeedbackModal } from "@/components/admin/RespondToFeedbackModal"
import { EditFeedbackModal } from "@/components/admin/EditFeedbackModal"
import { DeleteFeedbackConfirmation } from "@/components/admin/DeleteFeedbackConfirmation"

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

type FeedbackListProps = {
  filters: {
    type: string
    rating: string
    status: string
  }
}

export function FeedbackList({ filters }: FeedbackListProps) {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>([
    {
      id: "1",
      type: "user",
      rating: 4,
      comment: "Great service, very helpful!",
      status: "pending",
      authorId: "user1",
      authorName: "John Doe",
      createdAt: "2023-06-25T10:00:00Z",
    },
    {
      id: "2",
      type: "lawyer",
      rating: 5,
      comment: "Excellent platform for connecting with clients.",
      status: "responded",
      authorId: "lawyer1",
      authorName: "Jane Smith",
      createdAt: "2023-06-24T14:30:00Z",
    },
    {
      id: "3",
      type: "user",
      rating: 2,
      comment: "Had some issues with the communication.",
      status: "flagged",
      authorId: "user2",
      authorName: "Alice Johnson",
      createdAt: "2023-06-23T09:15:00Z",
    },
  ])

  const [respondingTo, setRespondingTo] = useState<Feedback | null>(null)
  const [editing, setEditing] = useState<Feedback | null>(null)
  const [deleting, setDeleting] = useState<Feedback | null>(null)

  const filteredFeedback = feedbackItems.filter((item) => {
    return (
      (filters.type === "all" || item.type === filters.type) &&
      (filters.rating === "all" || item.rating.toString() === filters.rating) &&
      (filters.status === "all" || item.status === filters.status)
    )
  })

  const handleRespond = (feedback: Feedback) => {
    setRespondingTo(feedback)
  }

  const handleEdit = (feedback: Feedback) => {
    setEditing(feedback)
  }

  const handleDelete = (feedback: Feedback) => {
    setDeleting(feedback)
  }

  const handleFlagToggle = (feedback: Feedback) => {
    const updatedFeedback = {
      ...feedback,
      status: feedback.status === "flagged" ? "pending" : "flagged",
    }
    setFeedbackItems(feedbackItems.map((item) => (item.id === feedback.id ? updatedFeedback : item)))
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredFeedback.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell>
                <Link href={`/admin/${feedback.type}s/${feedback.authorId}`} className="text-blue-600 hover:underline">
                  {feedback.authorName}
                </Link>
              </TableCell>
              <TableCell>{feedback.type}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {feedback.rating} <Star className="h-4 w-4 ml-1 text-yellow-400 fill-current" />
                </div>
              </TableCell>
              <TableCell>{feedback.comment}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    feedback.status === "pending"
                      ? "secondary"
                      : feedback.status === "responded"
                        ? "default"
                        : "destructive"
                  }
                >
                  {feedback.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleRespond(feedback)}>
                    <MessageCircle className="h-4 w-4 mr-1" /> Respond
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(feedback)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant={feedback.status === "flagged" ? "destructive" : "outline"}
                    onClick={() => handleFlagToggle(feedback)}
                  >
                    <Flag className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(feedback)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {respondingTo && (
        <RespondToFeedbackModal
          feedback={respondingTo}
          onClose={() => setRespondingTo(null)}
          onRespond={(response) => {
            // Handle response logic here
            console.log("Responding to feedback:", respondingTo.id, "with:", response)
            setRespondingTo(null)
          }}
        />
      )}

      {editing && (
        <EditFeedbackModal
          feedback={editing}
          onClose={() => setEditing(null)}
          onSave={(updatedFeedback) => {
            setFeedbackItems(feedbackItems.map((item) => (item.id === updatedFeedback.id ? updatedFeedback : item)))
            setEditing(null)
          }}
        />
      )}

      {deleting && (
        <DeleteFeedbackConfirmation
          feedback={deleting}
          onClose={() => setDeleting(null)}
          onConfirm={() => {
            setFeedbackItems(feedbackItems.filter((item) => item.id !== deleting.id))
            setDeleting(null)
          }}
        />
      )}
    </div>
  )
}

