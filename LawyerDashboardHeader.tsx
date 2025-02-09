import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LawyerDashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Welcome, Jane Doe</h1>
      <Button variant="outline" size="icon">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  )
}

