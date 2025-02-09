import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  Scale,
  Briefcase,
  CreditCard,
  AlertTriangle,
  BarChart,
  FileText,
  MessageSquare,
  CheckSquare,
  Settings,
  FileSearch,
} from "lucide-react"

const links = [
  { href: "/admin/users", label: "Manage Users", icon: Users },
  { href: "/admin/lawyers", label: "Manage Lawyers", icon: Scale },
  { href: "/admin/cases", label: "Case Management", icon: Briefcase },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/disputes", label: "Dispute Resolution", icon: AlertTriangle },
  { href: "/admin/reports", label: "Reports", icon: BarChart },
  { href: "/admin/content", label: "Content Management", icon: FileText },
  { href: "/admin/feedback", label: "Feedback Management", icon: MessageSquare },
  { href: "/admin/verification", label: "Lawyer Verification", icon: CheckSquare },
  { href: "/admin/settings", label: "System Settings", icon: Settings },
  { href: "/admin/audit-logs", label: "Audit Logs", icon: FileSearch },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Button key={link.href} asChild variant="outline" className="h-20 w-full">
            <Link href={link.href} className="flex flex-col items-center justify-center">
              <Icon className="h-6 w-6 mb-2" />
              <span>{link.label}</span>
            </Link>
          </Button>
        )
      })}
    </div>
  )
}

