"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NotifyLawyerModal } from "@/components/admin/NotifyLawyerModal"
import { EscalateIssueModal } from "@/components/admin/EscalateIssueModal"
import { MediateDisputeModal } from "@/components/admin/MediateDisputeModal"

type Case = {
  id: string
  title: string
  client: string
  lawyer: string
  status: "active" | "pending" | "closed"
  priority: "low" | "medium" | "high"
  lastUpdated: string
}

const mockCases: Case[] = [
  {
    id: "1",
    title: "Contract Dispute",
    client: "John Doe",
    lawyer: "Jane Smith",
    status: "active",
    priority: "high",
    lastUpdated: "2023-06-20",
  },
  {
    id: "2",
    title: "Intellectual Property Claim",
    client: "Alice Johnson",
    lawyer: "Bob Williams",
    status: "pending",
    priority: "medium",
    lastUpdated: "2023-06-19",
  },
  {
    id: "3",
    title: "Employment Law Consultation",
    client: "Carol Brown",
    lawyer: "David Lee",
    status: "active",
    priority: "low",
    lastUpdated: "2023-06-18",
  },
]

type CaseTableProps = {
  searchTerm: string
  filters: {
    status: string
    priority: string
  }
}

export function CaseTable({ searchTerm, filters }: CaseTableProps) {
  const [cases, setCases] = useState(mockCases)
  const [notifyingCase, setNotifyingCase] = useState<Case | null>(null)
  const [escalatingCase, setEscalatingCase] = useState<Case | null>(null)
  const [mediatingCase, setMediatingCase] = useState<Case | null>(null)

  const filteredCases = cases.filter(
    (case_) =>
      (case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.lawyer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.status === "all" || case_.status === filters.status) &&
      (filters.priority === "all" || case_.priority === filters.priority),
  )

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case Title</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Lawyer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCases.map((case_) => (
            <TableRow key={case_.id}>
              <TableCell>{case_.title}</TableCell>
              <TableCell>{case_.client}</TableCell>
              <TableCell>{case_.lawyer}</TableCell>
              <TableCell>
                <Badge
                  variant={case_.status === "active" ? "default" : case_.status === "pending" ? "secondary" : "outline"}
                >
                  {case_.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    case_.priority === "high" ? "destructive" : case_.priority === "medium" ? "default" : "secondary"
                  }
                >
                  {case_.priority}
                </Badge>
              </TableCell>
              <TableCell>{case_.lastUpdated}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => setNotifyingCase(case_)}>
                    Notify
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setEscalatingCase(case_)}>
                    Escalate
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setMediatingCase(case_)}>
                    Mediate
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/admin/cases/${case_.id}`}>Details</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/lawyer-dashboard/cases/${case_.id}`}>Lawyer View</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {notifyingCase && (
        <NotifyLawyerModal
          case_={notifyingCase}
          onClose={() => setNotifyingCase(null)}
          onNotify={() => {
            // Implement notification logic here
            setNotifyingCase(null)
          }}
        />
      )}
      {escalatingCase && (
        <EscalateIssueModal
          case_={escalatingCase}
          onClose={() => setEscalatingCase(null)}
          onEscalate={() => {
            // Implement escalation logic here
            setEscalatingCase(null)
          }}
        />
      )}
      {mediatingCase && (
        <MediateDisputeModal
          case_={mediatingCase}
          onClose={() => setMediatingCase(null)}
          onMediate={() => {
            // Implement mediation logic here
            setMediatingCase(null)
          }}
        />
      )}
    </>
  )
}

