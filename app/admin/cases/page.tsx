"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CaseTable } from "@/components/admin/CaseTable"
import { CaseSearch } from "@/components/admin/CaseSearch"
import { CaseFilters } from "@/components/admin/CaseFilters"
import { ArrowLeft } from "lucide-react"

export default function CaseMonitoring() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Case Monitoring</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <CaseSearch onSearch={setSearchTerm} />
        <CaseFilters onFilterChange={setFilters} />
      </div>

      <CaseTable searchTerm={searchTerm} filters={filters} />
    </div>
  )
}

