"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { LawyerVerificationModal } from "@/components/admin/LawyerVerificationModal"

type Lawyer = {
  id: string
  name: string
  email: string
  specialization: string
  status: "pending" | "in_progress" | "approved" | "rejected"
  submissionDate: string
}

type LawyerVerificationListProps = {
  filters: {
    status: string
    specialization: string
  }
}

export function LawyerVerificationList({ filters }: LawyerVerificationListProps) {
  const [lawyers, setLawyers] = useState<Lawyer[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      specialization: "Corporate Law",
      status: "pending",
      submissionDate: "2023-06-25",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      specialization: "Criminal Law",
      status: "in_progress",
      submissionDate: "2023-06-24",
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice@example.com",
      specialization: "Family Law",
      status: "approved",
      submissionDate: "2023-06-23",
    },
  ])

  const [verifyingLawyer, setVerifyingLawyer] = useState<Lawyer | null>(null)

  const filteredLawyers = lawyers.filter((lawyer) => {
    return (
      (filters.status === "all" || lawyer.status === filters.status) &&
      (filters.specialization === "all" ||
        lawyer.specialization.toLowerCase().replace(" ", "_") === filters.specialization)
    )
  })

  const handleVerify = (lawyer: Lawyer) => {
    setVerifyingLawyer(lawyer)
  }

  const handleUpdateStatus = (lawyerId: string, newStatus: Lawyer["status"]) => {
    setLawyers(lawyers.map((lawyer) => (lawyer.id === lawyerId ? { ...lawyer, status: newStatus } : lawyer)))
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submission Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLawyers.map((lawyer) => (
            <TableRow key={lawyer.id}>
              <TableCell>{lawyer.name}</TableCell>
              <TableCell>{lawyer.email}</TableCell>
              <TableCell>{lawyer.specialization}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>{lawyer.submissionDate}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => handleVerify(lawyer)}>
                    Verify
                  </Button>
                  <Link href={`/admin/lawyers/${lawyer.id}`} passHref>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {verifyingLawyer && (
        <LawyerVerificationModal
          lawyer={verifyingLawyer}
          onClose={() => setVerifyingLawyer(null)}
          onUpdateStatus={(newStatus) => {
            handleUpdateStatus(verifyingLawyer.id, newStatus)
            setVerifyingLawyer(null)
          }}
        />
      )}
    </div>
  )
}

