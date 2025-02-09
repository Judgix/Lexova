import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

type DisputeListProps = {
  disputes: Dispute[]
  onSelectDispute: (dispute: Dispute) => void
  selectedDisputeId: string | undefined
}

export function DisputeList({ disputes, onSelectDispute, selectedDisputeId }: DisputeListProps) {
  return (
    <ul className="space-y-2">
      {disputes.map((dispute) => (
        <li key={dispute.id}>
          <Button
            variant={dispute.id === selectedDisputeId ? "default" : "outline"}
            className="w-full justify-start text-left"
            onClick={() => onSelectDispute(dispute)}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{dispute.subject}</span>
              <span className="text-sm text-muted-foreground">Case ID: {dispute.caseId}</span>
              <Badge
                variant={
                  dispute.status === "open" ? "default" : dispute.status === "escalated" ? "destructive" : "secondary"
                }
                className="mt-1"
              >
                {dispute.status}
              </Badge>
            </div>
          </Button>
        </li>
      ))}
    </ul>
  )
}

