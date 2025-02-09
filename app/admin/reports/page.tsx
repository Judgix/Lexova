"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportForm } from "@/components/admin/ReportForm"
import { ReportDisplay } from "@/components/admin/ReportDisplay"
import { ArrowLeft } from "lucide-react"

export default function ReportsPage() {
  const [reportData, setReportData] = useState<any | null>(null)

  const handleGenerateReport = (formData: any) => {
    // In a real application, you would call an API to generate the report
    // For this example, we'll simulate it with mock data
    const mockReportData = {
      totalClients: 1234,
      totalLawyers: 567,
      totalRevenue: 987654.32,
      clientsRegistered: 89,
      lawyersRegistered: 23,
      connectionsFormed: 45,
      activeLawyersWithoutClients: 12,
      activeLawyersWithClients: 78,
      topLawyerArea: "New York",
      // Add more mock data as needed
    }
    setReportData(mockReportData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Reports</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Generate Report</CardTitle>
          </CardHeader>
          <CardContent>
            <ReportForm onGenerateReport={handleGenerateReport} />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Report Display</CardTitle>
          </CardHeader>
          <CardContent>
            <ReportDisplay reportData={reportData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

