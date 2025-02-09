import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FinancialReportModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function FinancialReportModal({ isOpen, onClose }: FinancialReportModalProps) {
  const [reportType, setReportType] = useState("monthly")
  const [reportPeriod, setReportPeriod] = useState("")

  const handleGenerateReport = () => {
    // Implement report generation logic here
    console.log(`Generating ${reportType} report for period: ${reportPeriod}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Financial Report</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reportType" className="text-right">
              Report Type
            </Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reportPeriod" className="text-right">
              Report Period
            </Label>
            <Select value={reportPeriod} onValueChange={setReportPeriod}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select report period" />
              </SelectTrigger>
              <SelectContent>
                {reportType === "monthly" ? (
                  <>
                    <SelectItem value="2023-06">June 2023</SelectItem>
                    <SelectItem value="2023-05">May 2023</SelectItem>
                    <SelectItem value="2023-04">April 2023</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleGenerateReport}>
            Generate Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

