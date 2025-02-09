"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeedbackList } from "@/components/admin/FeedbackList"
import { FeedbackFilters } from "@/components/admin/FeedbackFilters"
import { ArrowLeft } from "lucide-react"

export default function FeedbackManagementPage() {
  const [filters, setFilters] = useState({
    type: "all",
    rating: "all",
    status: "all",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Feedback Management</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <FeedbackFilters onFilterChange={setFilters} />
          <FeedbackList filters={filters} />
        </CardContent>
      </Card>
    </div>
  )
}

