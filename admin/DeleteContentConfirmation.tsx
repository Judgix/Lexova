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

type Content = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

type DeleteContentConfirmationProps = {
  content: Content
  onClose: () => void
  onConfirm: () => void
}

export function DeleteContentConfirmation({ content, onClose, onConfirm }: DeleteContentConfirmationProps) {
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this content?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the content titled "{content.title}".
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

