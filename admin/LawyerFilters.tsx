import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type LawyerFiltersProps = {
  onFilterChange: (filters: { status: string; specialization: string }) => void
}

export function LawyerFilters({ onFilterChange }: LawyerFiltersProps) {
  return (
    <div className="flex space-x-4">
      <Select onValueChange={(value) => onFilterChange({ status: value, specialization: "all" })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="suspended">Suspended</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => onFilterChange({ status: "all", specialization: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Specializations</SelectItem>
          <SelectItem value="Corporate Law">Corporate Law</SelectItem>
          <SelectItem value="Criminal Law">Criminal Law</SelectItem>
          <SelectItem value="Family Law">Family Law</SelectItem>
          <SelectItem value="Intellectual Property">Intellectual Property</SelectItem>
          <SelectItem value="Real Estate Law">Real Estate Law</SelectItem>
          <SelectItem value="Tax Law">Tax Law</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

