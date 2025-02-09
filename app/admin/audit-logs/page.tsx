"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download } from "lucide-react"
import { DatePicker } from "@/components/ui/date-picker"

type AuditLog = {
  id: string
  action: string
  user: string
  timestamp: string
  details: string
}

export default function AuditLogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  // Mock audit logs data
  const auditLogs: AuditLog[] = [
    {
      id: "1",
      action: "User Sign In",
      user: "john@example.com",
      timestamp: "2023-06-28 10:30:00",
      details: "Successful login from IP 192.168.1.1",
    },
    {
      id: "2",
      action: "Profile Update",
      user: "jane@example.com",
      timestamp: "2023-06-28 11:15:00",
      details: "Changed profile picture and updated bio",
    },
    {
      id: "3",
      action: "Case Created",
      user: "lawyer@example.com",
      timestamp: "2023-06-28 14:45:00",
      details: "New case #12345 created for client Alice",
    },
    // Add more mock data as needed
  ]

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())

    const logDate = new Date(log.timestamp)
    const afterStartDate = startDate ? logDate >= startDate : true
    const beforeEndDate = endDate ? logDate <= endDate : true

    return matchesSearch && afterStartDate && beforeEndDate
  })

  const handleExport = () => {
    // Implement export logic here
    console.log("Exporting audit logs")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Audit Logs</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <DatePicker date={startDate} setDate={setStartDate} placeholder="Start Date" />
            <DatePicker date={endDate} setDate={setEndDate} placeholder="End Date" />
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" /> Export Logs
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audit Log Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

