import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

type ReportDisplayProps = {
  reportData: any | null
}

export function ReportDisplay({ reportData }: ReportDisplayProps) {
  const handleDownloadPDF = () => {
    // Implement PDF download logic
    console.log("Downloading PDF...")
  }

  const handleDownloadCSV = () => {
    // Implement CSV download logic
    console.log("Downloading CSV...")
  }

  if (!reportData) {
    return <p>No report data available. Please generate a report.</p>
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Clients: {reportData.totalClients}</p>
            <p>New Registrations: {reportData.clientsRegistered}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lawyers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Lawyers: {reportData.totalLawyers}</p>
            <p>New Registrations: {reportData.lawyersRegistered}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <p>New Connections: {reportData.connectionsFormed}</p>
            <p>Active Lawyers with Clients: {reportData.activeLawyersWithClients}</p>
            <p>Active Lawyers without Clients: {reportData.activeLawyersWithoutClients}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Revenue: ${reportData.totalRevenue.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Additional Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Top Lawyer Area: {reportData.topLawyerArea}</p>
          {/* Add more insights as needed */}
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-2">
        <Button onClick={handleDownloadPDF} variant="outline">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
        <Button onClick={handleDownloadCSV} variant="outline">
          <Download className="mr-2 h-4 w-4" /> Download CSV
        </Button>
      </div>
    </div>
  )
}

