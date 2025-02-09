"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ApprovePaymentModal } from "@/components/admin/ApprovePaymentModal"
import { DisputePaymentModal } from "@/components/admin/DisputePaymentModal"

type Payment = {
  id: string
  amount: number
  status: "pending" | "approved" | "disputed"
  type: "case_payment" | "subscription" | "platform_fee"
  client: string
  lawyer: string
  date: string
}

const mockPayments: Payment[] = [
  {
    id: "1",
    amount: 500,
    status: "pending",
    type: "case_payment",
    client: "John Doe",
    lawyer: "Jane Smith",
    date: "2023-06-25",
  },
  {
    id: "2",
    amount: 50,
    status: "approved",
    type: "subscription",
    client: "Alice Johnson",
    lawyer: "N/A",
    date: "2023-06-24",
  },
  {
    id: "3",
    amount: 25,
    status: "approved",
    type: "platform_fee",
    client: "N/A",
    lawyer: "Bob Williams",
    date: "2023-06-23",
  },
  {
    id: "4",
    amount: 750,
    status: "disputed",
    type: "case_payment",
    client: "Carol Brown",
    lawyer: "David Lee",
    date: "2023-06-22",
  },
]

type PaymentTableProps = {
  searchTerm: string
  filters: {
    status: string
    paymentType: string
  }
}

export function PaymentTable({ searchTerm, filters }: PaymentTableProps) {
  const [payments, setPayments] = useState(mockPayments)
  const [approvingPayment, setApprovingPayment] = useState<Payment | null>(null)
  const [disputingPayment, setDisputingPayment] = useState<Payment | null>(null)

  const filteredPayments = payments.filter(
    (payment) =>
      (payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.lawyer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.status === "all" || payment.status === filters.status) &&
      (filters.paymentType === "all" || payment.type === filters.paymentType),
  )

  const handleApprovePayment = (updatedPayment: Payment) => {
    setPayments(payments.map((p) => (p.id === updatedPayment.id ? updatedPayment : p)))
    setApprovingPayment(null)
  }

  const handleDisputePayment = (updatedPayment: Payment) => {
    setPayments(payments.map((p) => (p.id === updatedPayment.id ? updatedPayment : p)))
    setDisputingPayment(null)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Lawyer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPayments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    payment.status === "approved"
                      ? "default"
                      : payment.status === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell>{payment.type.replace("_", " ")}</TableCell>
              <TableCell>{payment.client}</TableCell>
              <TableCell>{payment.lawyer}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={() => setApprovingPayment(payment)}
                    disabled={payment.status === "approved"}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setDisputingPayment(payment)}
                    disabled={payment.status === "disputed"}
                  >
                    Dispute
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {approvingPayment && (
        <ApprovePaymentModal
          payment={approvingPayment}
          onClose={() => setApprovingPayment(null)}
          onApprove={handleApprovePayment}
        />
      )}
      {disputingPayment && (
        <DisputePaymentModal
          payment={disputingPayment}
          onClose={() => setDisputingPayment(null)}
          onDispute={handleDisputePayment}
        />
      )}
    </>
  )
}

