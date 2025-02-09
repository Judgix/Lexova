import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Payment = {
  id: string
  date: string
  amount: number
  description: string
  status: "completed" | "pending" | "failed"
}

const mockPayments: Payment[] = [
  { id: "1", date: "2023-06-15", amount: 500, description: "Legal consultation", status: "completed" },
  { id: "2", date: "2023-06-10", amount: 1000, description: "Contract review", status: "completed" },
  { id: "3", date: "2023-06-05", amount: 750, description: "Case representation", status: "completed" },
  { id: "4", date: "2023-05-30", amount: 250, description: "Document preparation", status: "completed" },
]

export function PaymentHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockPayments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.date}</TableCell>
            <TableCell>{payment.description}</TableCell>
            <TableCell>${payment.amount.toFixed(2)}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold
                ${
                  payment.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : payment.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

