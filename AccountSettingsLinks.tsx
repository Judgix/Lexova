import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AccountSettingsLinks() {
  return (
    <div className="space-y-4">
      <Button asChild variant="outline" className="w-full">
        <Link href="/dashboard/change-password">Update Password</Link>
      </Button>
      <Button asChild variant="outline" className="w-full">
        <Link href="/dashboard/notification-preferences">Notification Preferences</Link>
      </Button>
      <Button asChild variant="outline" className="w-full text-red-600 hover:text-red-700">
        <Link href="/dashboard/delete-account">Delete Account</Link>
      </Button>
    </div>
  )
}

