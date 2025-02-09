import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FeedbackFiltersProps = {
  onFilterChange: (filters: { type: string; rating: string; status: string }) => void
}

export function FeedbackFilters({ onFilterChange }: FeedbackFiltersProps) {
  return (
    <div className="flex space-x-4 mb-6">
      <Select onValueChange={(value) => onFilterChange({ type: value, rating: "all", status: "all" })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="user">User Feedback</SelectItem>
          <SelectItem value="lawyer">Lawyer Feedback</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ type: "all", rating: value, status: "all" })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="5">5 Stars</SelectItem>
          <SelectItem value="4">4 Stars</SelectItem>
          <SelectItem value="3">3 Stars</SelectItem>
          <SelectItem value="2">2 Stars</SelectItem>
          <SelectItem value="1">1 Star</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFilterChange({ type: "all", rating: "all", status: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="responded">Responded</SelectItem>
          <SelectItem value="flagged">Flagged</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

