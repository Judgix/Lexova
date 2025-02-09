import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CaseStatistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Case Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">Active Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Pending Requests</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">42</p>
            <p className="text-sm text-muted-foreground">Completed Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">89%</p>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

