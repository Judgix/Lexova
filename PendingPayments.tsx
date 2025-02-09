import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type PendingPayment = {
  id: string
  dueDate: string
  amount: number
  description: string
  client: string
}

const mockPendingPayments: PendingPayment[] = [
  { id: "1", dueDate: "2023-07-01", amount: 800, description: "Ongoing case representation", client: "John Doe" },
  { id: "2", dueDate: "2023-07-05", amount: 500, description: "Legal consultation", client: "Jane Smith" },
  { id: "3", dueDate: "2023-07-10", amount: 1200, description: "Contract negotiation", client: "Acme Corp" },
]

export function PendingPayments() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Due Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockPendingPayments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.dueDate}</TableCell>
            <TableCell>{payment.description}</TableCell>
            <TableCell>{payment.client}</TableCell>
            <TableCell>${payment.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

