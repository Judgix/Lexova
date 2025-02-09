import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activeCases = [
  { id: "1", title: "Corporate Merger", client: "Tech Corp", status: "In Progress", lastUpdated: "2023-06-15" },
  { id: "2", title: "Patent Infringement", client: "Innovate LLC", status: "Discovery", lastUpdated: "2023-06-14" },
  { id: "3", title: "Employment Dispute", client: "HR Solutions", status: "Mediation", lastUpdated: "2023-06-13" },
]

export function ActiveCases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activeCases.map((caseItem) => (
            <li key={caseItem.id} className="flex justify-between items-center">
              <div>
                <Link href={`/lawyer-dashboard/cases/${caseItem.id}`} className="font-medium hover:underline">
                  {caseItem.title}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {caseItem.client} - Last updated: {caseItem.lastUpdated}
                </p>
              </div>
              <Badge>{caseItem.status}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

