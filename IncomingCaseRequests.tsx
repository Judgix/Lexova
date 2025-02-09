import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const incomingRequests = [
  { id: "1", title: "Contract Dispute", client: "John Smith", date: "2023-06-20" },
  { id: "2", title: "Intellectual Property Claim", client: "Sarah Johnson", date: "2023-06-19" },
  { id: "3", title: "Employment Law Consultation", client: "Michael Brown", date: "2023-06-18" },
]

export function IncomingCaseRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incoming Case Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {incomingRequests.map((request) => (
            <li key={request.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{request.title}</p>
                <p className="text-sm text-muted-foreground">
                  {request.client} - {request.date}
                </p>
              </div>
              <Button asChild size="sm">
                <Link href={`/lawyer-dashboard/cases/${request.id}`}>Review</Link>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

