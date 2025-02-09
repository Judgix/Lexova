import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type LawyerSearchProps = {
  onSearch: (term: string) => void
}

export function LawyerSearch({ onSearch }: LawyerSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search lawyers..." className="pl-8" onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

