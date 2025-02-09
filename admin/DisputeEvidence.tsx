import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

type Evidence = {
  id: string
  fileName: string
  fileType: string
  uploadedBy: "client" | "lawyer"
  uploadDate: string
}

type DisputeEvidenceProps = {
  disputeId: string
}

export function DisputeEvidence({ disputeId }: DisputeEvidenceProps) {
  // In a real application, you would fetch the evidence using the disputeId
  const evidence: Evidence[] = [
    {
      id: "1",
      fileName: "billing_statement.pdf",
      fileType: "application/pdf",
      uploadedBy: "lawyer",
      uploadDate: "2023-06-25T10:15:00Z",
    },
    {
      id: "2",
      fileName: "client_communication.docx",
      fileType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      uploadedBy: "client",
      uploadDate: "2023-06-25T11:30:00Z",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evidence</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {evidence.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="font-medium">{item.fileName}</p>
                  <p className="text-sm text-gray-500">
                    Uploaded by {item.uploadedBy} on {new Date(item.uploadDate).toLocaleString()}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

