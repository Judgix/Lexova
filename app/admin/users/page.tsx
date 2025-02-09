"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserTable } from "@/components/admin/UserTable"
import { UserSearch } from "@/components/admin/UserSearch"
import { UserFilters } from "@/components/admin/UserFilters"
import { ArrowLeft } from "lucide-react"

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    status: "all",
    role: "all",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <UserSearch onSearch={setSearchTerm} />
        <UserFilters onFilterChange={setFilters} />
      </div>

      <UserTable searchTerm={searchTerm} filters={filters} />
    </div>
  )
}

