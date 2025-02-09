import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, CreditCard, User, Star } from "lucide-react"

const links = [
  { href: "/lawyer-dashboard/cases", label: "Case Management", icon: Briefcase },
  { href: "/lawyer-dashboard/profile", label: "Profile Management", icon: User },
  { href: "/lawyer-dashboard/payments", label: "Payment Page", icon: CreditCard },
  { href: "/lawyer-dashboard/reviews", label: "Review Page", icon: Star },
]

export function QuickLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Button key={link.href} asChild variant="outline" className="w-full">
                <Link href={link.href} className="flex items-center justify-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

