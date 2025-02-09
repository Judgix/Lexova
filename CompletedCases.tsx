import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const completedCases = [
  { id: "1", title: "Trademark Registration", client: "Brand Co", completionDate: "2023-06-10" },
  { id: "2", title: "Contract Negotiation", client: "Deal Makers Inc", completionDate: "2023-06-05" },
  { id: "3", title: "Real Estate Closing", client: "Property Investors", completionDate: "2023-06-01" },
]

export function CompletedCases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Completed Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {completedCases.map((caseItem) => (
            <li key={caseItem.id} className="flex justify-between items-center">
              <div>
                <Link href={`/lawyer-dashboard/cases/${caseItem.id}`} className="font-medium hover:underline">
                  {caseItem.title}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {caseItem.client} - Completed: {caseItem.completionDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

