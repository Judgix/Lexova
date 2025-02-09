import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CaseDetails } from "@/components/admin/CaseDetails"
import { DisputeMessages } from "@/components/admin/DisputeMessages"
import { DisputeEvidence } from "@/components/admin/DisputeEvidence"
import { ResolutionActions } from "@/components/admin/ResolutionActions"

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

type DisputeDetailsProps = {
  dispute: Dispute
  onUpdateDispute: (updatedDispute: Dispute) => void
}

export function DisputeDetails({ dispute, onUpdateDispute }: DisputeDetailsProps) {
  const [activeTab, setActiveTab] = useState("case-details")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dispute: {dispute.subject}</h2>
        <div className="space-x-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`/admin/users/${dispute.clientId}`}>View Client Profile</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/admin/lawyers/${dispute.lawyerId}`}>View Lawyer Profile</Link>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="case-details">Case Details</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="evidence">Evidence</TabsTrigger>
        </TabsList>
        <TabsContent value="case-details">
          <CaseDetails caseId={dispute.caseId} />
        </TabsContent>
        <TabsContent value="messages">
          <DisputeMessages disputeId={dispute.id} />
        </TabsContent>
        <TabsContent value="evidence">
          <DisputeEvidence disputeId={dispute.id} />
        </TabsContent>
      </Tabs>

      <ResolutionActions dispute={dispute} onUpdateDispute={onUpdateDispute} />
    </div>
  )
}

