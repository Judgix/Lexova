"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LawyerTable } from "@/components/admin/LawyerTable"
import { LawyerSearch } from "@/components/admin/LawyerSearch"
import { LawyerFilters } from "@/components/admin/LawyerFilters"
import { ArrowLeft } from "lucide-react"

export default function LawyerManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    status: "all",
    specialization: "all",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lawyer Management</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <LawyerSearch onSearch={setSearchTerm} />
        <LawyerFilters onFilterChange={setFilters} />
      </div>

      <LawyerTable searchTerm={searchTerm} filters={filters} />
    </div>
  )
}

