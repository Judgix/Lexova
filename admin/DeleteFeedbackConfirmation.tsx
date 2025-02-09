import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

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

type DeleteFeedbackConfirmationProps = {
  feedback: Feedback
  onClose: () => void
  onConfirm: () => void
}

export function DeleteFeedbackConfirmation({ feedback, onClose, onConfirm }: DeleteFeedbackConfirmationProps) {
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this feedback?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the feedback from {feedback.authorName}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

