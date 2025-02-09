import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Case = {
  id: string
  title: string
  client: string
  status: string
  lastUpdated: string
}

type CaseListProps = {
  cases: Case[]
  onSelectCase: (caseItem: Case) => void
  selectedCaseId: string
}

export function CaseList({ cases, onSelectCase, selectedCaseId }: CaseListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {cases.map((caseItem) => (
            <li key={caseItem.id}>
              <Button
                variant={caseItem.id === selectedCaseId ? "default" : "outline"}
                className="w-full justify-start text-left"
                onClick={() => onSelectCase(caseItem)}
              >
                <div>
                  <p className="font-medium">{caseItem.title}</p>
                  <p className="text-sm text-muted-foreground">{caseItem.client}</p>
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

