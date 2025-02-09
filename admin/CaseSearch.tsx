import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type CaseSearchProps = {
  onSearch: (term: string) => void
}

export function CaseSearch({ onSearch }: CaseSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search cases..." className="pl-8" onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

