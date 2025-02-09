"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditContentModal } from "@/components/admin/EditContentModal"
import { DeleteContentConfirmation } from "@/components/admin/DeleteContentConfirmation"
import { Pencil, Trash2 } from "lucide-react"

type Content = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

type ContentListProps = {
  contentType: "legal_knowledge" | "faqs" | "user_info" | "lawyer_info"
}

export function ContentList({ contentType }: ContentListProps) {
  const [editingContent, setEditingContent] = useState<Content | null>(null)
  const [deletingContent, setDeletingContent] = useState<Content | null>(null)

  // Mock data - in a real application, this would be fetched from an API
  const mockContent: Content[] = [
    { id: "1", title: "Introduction to Contract Law", createdAt: "2023-06-01", updatedAt: "2023-06-15" },
    { id: "2", title: "Understanding Intellectual Property", createdAt: "2023-06-05", updatedAt: "2023-06-20" },
    { id: "3", title: "Basics of Family Law", createdAt: "2023-06-10", updatedAt: "2023-06-25" },
  ]

  const handleEdit = (content: Content) => {
    setEditingContent(content)
  }

  const handleDelete = (content: Content) => {
    setDeletingContent(content)
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockContent.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.createdAt}</TableCell>
              <TableCell>{content.updatedAt}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(content)}>
                    <Pencil className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(content)}>
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingContent && (
        <EditContentModal
          content={editingContent}
          contentType={contentType}
          onClose={() => setEditingContent(null)}
          onSave={(updatedContent) => {
            // Handle saving updated content
            console.log("Saving updated content:", updatedContent)
            setEditingContent(null)
          }}
        />
      )}

      {deletingContent && (
        <DeleteContentConfirmation
          content={deletingContent}
          onClose={() => setDeletingContent(null)}
          onConfirm={() => {
            // Handle deleting content
            console.log("Deleting content:", deletingContent)
            setDeletingContent(null)
          }}
        />
      )}
    </div>
  )
}

