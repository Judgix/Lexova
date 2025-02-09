"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EditLawyerModal } from "@/components/admin/EditLawyerModal"
import { VerifyCertificationModal } from "@/components/admin/VerifyCertificationModal"
import { ActivityLogModal } from "@/components/admin/ActivityLogModal"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Lawyer = {
  id: string
  name: string
  email: string
  specializations: string[]
  rating: number
  successRate: number
  status: "active" | "suspended" | "pending"
  certificationStatus: "verified" | "pending" | "rejected"
}

const mockLawyers: Lawyer[] = [
  {
    id: "1",
    name: "Jane Smith",
    email: "jane@example.com",
    specializations: ["Corporate Law", "Intellectual Property"],
    rating: 4.8,
    successRate: 92,
    status: "active",
    certificationStatus: "verified",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    specializations: ["Criminal Law", "Family Law"],
    rating: 4.5,
    successRate: 88,
    status: "active",
    certificationStatus: "pending",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    specializations: ["Real Estate Law", "Tax Law"],
    rating: 4.9,
    successRate: 95,
    status: "suspended",
    certificationStatus: "verified",
  },
]

type LawyerTableProps = {
  searchTerm: string
  filters: {
    status: string
    specialization: string
  }
}

export function LawyerTable({ searchTerm, filters }: LawyerTableProps) {
  const [lawyers, setLawyers] = useState(mockLawyers)
  const [editingLawyer, setEditingLawyer] = useState<Lawyer | null>(null)
  const [verifyingLawyer, setVerifyingLawyer] = useState<Lawyer | null>(null)
  const [viewingActivityLog, setViewingActivityLog] = useState<string | null>(null)

  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      (lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.status === "all" || lawyer.status === filters.status) &&
      (filters.specialization === "all" || lawyer.specializations.includes(filters.specialization)),
  )

  const handleStatusChange = (lawyerId: string, newStatus: "active" | "suspended") => {
    setLawyers(lawyers.map((lawyer) => (lawyer.id === lawyerId ? { ...lawyer, status: newStatus } : lawyer)))
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specializations</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Success Rate</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Certification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLawyers.map((lawyer) => (
            <TableRow key={lawyer.id}>
              <TableCell>{lawyer.name}</TableCell>
              <TableCell>{lawyer.email}</TableCell>
              <TableCell>{lawyer.specializations.join(", ")}</TableCell>
              <TableCell>{lawyer.rating.toFixed(1)}</TableCell>
              <TableCell>{lawyer.successRate}%</TableCell>
              <TableCell>
                <Badge
                  variant={
                    lawyer.status === "active" ? "default" : lawyer.status === "suspended" ? "destructive" : "secondary"
                  }
                >
                  {lawyer.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    lawyer.certificationStatus === "verified"
                      ? "default"
                      : lawyer.certificationStatus === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {lawyer.certificationStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => setEditingLawyer(lawyer)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setVerifyingLawyer(lawyer)}>
                    Verify
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setViewingActivityLog(lawyer.id)}>
                    Log
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant={lawyer.status === "active" ? "destructive" : "default"}>
                        {lawyer.status === "active" ? "Suspend" : "Activate"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {lawyer.status === "active" ? "Suspend" : "Activate"} Lawyer Account
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to {lawyer.status === "active" ? "suspend" : "activate"} {lawyer.name}
                          's account?
                          {lawyer.status === "active"
                            ? " This will prevent the lawyer from accessing the platform."
                            : " This will restore the lawyer's access to the platform."}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            handleStatusChange(lawyer.id, lawyer.status === "active" ? "suspended" : "active")
                          }
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingLawyer && (
        <EditLawyerModal
          lawyer={editingLawyer}
          onClose={() => setEditingLawyer(null)}
          onSave={(updatedLawyer) => {
            setLawyers(lawyers.map((l) => (l.id === updatedLawyer.id ? updatedLawyer : l)))
            setEditingLawyer(null)
          }}
        />
      )}
      {verifyingLawyer && (
        <VerifyCertificationModal
          lawyer={verifyingLawyer}
          onClose={() => setVerifyingLawyer(null)}
          onVerify={(verifiedLawyer) => {
            setLawyers(lawyers.map((l) => (l.id === verifiedLawyer.id ? verifiedLawyer : l)))
            setVerifyingLawyer(null)
          }}
        />
      )}
      {viewingActivityLog && (
        <ActivityLogModal userId={viewingActivityLog} onClose={() => setViewingActivityLog(null)} />
      )}
    </>
  )
}

