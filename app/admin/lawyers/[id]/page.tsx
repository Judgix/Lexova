"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

type Lawyer = {
  id: string
  name: string
  email: string
  specialization: string
  status: "pending" | "in_progress" | "approved" | "rejected"
  submissionDate: string
  // Add more fields as needed
}

export default function LawyerProfilePage() {
  const params = useParams()
  const [lawyer, setLawyer] = useState<Lawyer | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the lawyer data here
    // For this example, we'll use mock data
    const mockLawyer: Lawyer = {
      id: params.id as string,
      name: "John Doe",
      email: "john@example.com",
      specialization: "Corporate Law",
      status: "approved",
      submissionDate: "2023-06-25",
    }
    setLawyer(mockLawyer)
  }, [params.id])

  if (!lawyer) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lawyer Profile</h1>

        <Button asChild variant="outline">
          <Link href="/admin/verification">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Verification
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lawyer Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold">Name</h2>
              <p>{lawyer.name}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p>{lawyer.email}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Specialization</h2>
              <p>{lawyer.specialization}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Submission Date</h2>
              <p>{lawyer.submissionDate}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Verification Status</h2>
              <Badge
                variant={
                  lawyer.status === "approved"
                    ? "default"
                    : lawyer.status === "rejected"
                      ? "destructive"
                      : lawyer.status === "in_progress"
                        ? "secondary"
                        : "outline"
                }
              >
                {lawyer.status}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

