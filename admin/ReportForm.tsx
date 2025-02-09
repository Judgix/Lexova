import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

type ReportFormProps = {
  onGenerateReport: (formData: any) => void
}

export function ReportForm({ onGenerateReport }: ReportFormProps) {
  const [reportType, setReportType] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerateReport({ reportType, startDate, endDate })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="reportType">Report Type</Label>
        <Select value={reportType} onValueChange={setReportType}>
          <SelectTrigger id="reportType">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="overview">Platform Overview</SelectItem>
            <SelectItem value="revenue">Revenue Report</SelectItem>
            <SelectItem value="user_growth">User Growth</SelectItem>
            <SelectItem value="lawyer_performance">Lawyer Performance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Start Date</Label>
        <DatePicker date={startDate} setDate={setStartDate} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="endDate">End Date</Label>
        <DatePicker date={endDate} setDate={setEndDate} />
      </div>

      <Button type="submit" className="w-full">
        Generate Report
      </Button>
    </form>
  )
}

