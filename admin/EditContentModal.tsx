"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Content = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

type EditContentModalProps = {
  content: Content
  contentType: "legal_knowledge" | "faqs" | "user_info" | "lawyer_info"
  onClose: () => void
  onSave: (updatedContent: Content) => void
}

export function EditContentModal({ content, contentType, onClose, onSave }: EditContentModalProps) {
  const [title, setTitle] = useState(content.title)
  const [body, setBody] = useState("")

  useEffect(() => {
    // In a real application, you would fetch the full content body here
    setBody("This is the mock content body for " + content.title)
  }, [content])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updatedContent = {
      ...content,
      title,
      updatedAt: new Date().toISOString(),
    }
    onSave(updatedContent)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="body" className="text-right">
                Content
              </Label>
              <Textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="col-span-3"
                rows={10}
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

