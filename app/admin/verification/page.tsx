"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LawyerVerificationList } from "@/components/admin/LawyerVerificationList"
import { VerificationFilters } from "@/components/admin/VerificationFilters"
import { ArrowLeft } from "lucide-react"

export default function VerificationPage() {
  const [filters, setFilters] = useState({
    status: "all",
    specialization: "all",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lawyer Verification</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Verifications</CardTitle>
        </CardHeader>
        <CardContent>
          <VerificationFilters onFilterChange={setFilters} />
          <LawyerVerificationList filters={filters} />
        </CardContent>
      </Card>
    </div>
  )
}

