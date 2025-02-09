import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type VerificationFiltersProps = {
  onFilterChange: (filters: { status: string; specialization: string }) => void
}

export function VerificationFilters({ onFilterChange }: VerificationFiltersProps) {
  return (
    <div className="flex space-x-4 mb-6">
      <Select onValueChange={(value) => onFilterChange({ status: value, specialization: "all" })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="in_progress">In Progress</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ status: "all", specialization: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Specializations</SelectItem>
          <SelectItem value="corporate">Corporate Law</SelectItem>
          <SelectItem value="criminal">Criminal Law</SelectItem>
          <SelectItem value="family">Family Law</SelectItem>
          <SelectItem value="intellectual_property">Intellectual Property</SelectItem>
          <SelectItem value="real_estate">Real Estate Law</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

