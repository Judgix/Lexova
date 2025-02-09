import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PaymentFiltersProps = {
  onFilterChange: (filters: { status: string; paymentType: string }) => void
}

export function PaymentFilters({ onFilterChange }: PaymentFiltersProps) {
  return (
    <div className="flex space-x-4">
      <Select onValueChange={(value) => onFilterChange({ status: value, paymentType: "all" })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="disputed">Disputed</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => onFilterChange({ status: "all", paymentType: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="case_payment">Case Payment</SelectItem>
          <SelectItem value="subscription">Subscription</SelectItem>
          <SelectItem value="platform_fee">Platform Fee</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

