"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DisputeList } from "@/components/admin/DisputeList"
import { DisputeDetails } from "@/components/admin/DisputeDetails"
import { ArrowLeft } from "lucide-react"

type Dispute = {
  id: string
  caseId: string
  clientId: string
  lawyerId: string
  status: "open" | "resolved" | "escalated"
  createdAt: string
  updatedAt: string
  subject: string
}

const mockDisputes: Dispute[] = [
  {
    id: "1",
    caseId: "CASE-001",
    clientId: "CLIENT-001",
    lawyerId: "LAWYER-001",
    status: "open",
    createdAt: "2023-06-25T10:00:00Z",
    updatedAt: "2023-06-25T10:00:00Z",
    subject: "Billing discrepancy",
  },
  {
    id: "2",
    caseId: "CASE-002",
    clientId: "CLIENT-002",
    lawyerId: "LAWYER-002",
    status: "escalated",
    createdAt: "2023-06-24T14:30:00Z",
    updatedAt: "2023-06-26T09:15:00Z",
    subject: "Unprofessional conduct",
  },
  {
    id: "3",
    caseId: "CASE-003",
    clientId: "CLIENT-003",
    lawyerId: "LAWYER-003",
    status: "resolved",
    createdAt: "2023-06-23T11:45:00Z",
    updatedAt: "2023-06-25T16:20:00Z",
    subject: "Missed deadline",
  },
]

export default function DisputeResolution() {
  const [disputes, setDisputes] = useState<Dispute[]>(mockDisputes)
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dispute Resolution</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Ongoing Disputes</CardTitle>
          </CardHeader>
          <CardContent>
            <DisputeList
              disputes={disputes}
              onSelectDispute={setSelectedDispute}
              selectedDisputeId={selectedDispute?.id}
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Dispute Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDispute ? (
              <DisputeDetails
                dispute={selectedDispute}
                onUpdateDispute={(updatedDispute) => {
                  setDisputes(disputes.map((d) => (d.id === updatedDispute.id ? updatedDispute : d)))
                  setSelectedDispute(updatedDispute)
                }}
              />
            ) : (
              <p>Select a dispute to view details</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

