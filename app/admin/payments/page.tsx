"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentTable } from "@/components/admin/PaymentTable"
import { PaymentSearch } from "@/components/admin/PaymentSearch"
import { PaymentFilters } from "@/components/admin/PaymentFilters"
import { FinancialReportModal } from "@/components/admin/FinancialReportModal"
import { ArrowLeft } from "lucide-react"

export default function PaymentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    status: "all",
    paymentType: "all",
  })
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <div className="space-x-4">
          <Button onClick={() => setIsReportModalOpen(true)}>Generate Report</Button>
          <Button asChild variant="outline">
            <Link href="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Payment Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-primary">Total Payments</h3>
              <p className="text-2xl font-bold">$123,456.78</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-primary">Pending Payments</h3>
              <p className="text-2xl font-bold">$12,345.67</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold text-primary">Platform Fees</h3>
              <p className="text-2xl font-bold">$6,789.01</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <PaymentSearch onSearch={setSearchTerm} />
        <PaymentFilters onFilterChange={setFilters} />
      </div>

      <PaymentTable searchTerm={searchTerm} filters={filters} />

      <FinancialReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />
    </div>
  )
}

