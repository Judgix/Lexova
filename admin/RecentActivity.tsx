import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new case",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "closed a case",
    time: "4 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    user: "Bob Johnson",
    action: "updated their profile",
    time: "6 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    user: "Alice Brown",
    action: "left a review",
    time: "8 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={activity.avatar} alt={activity.user} />
            <AvatarFallback>
              {activity.user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">
              {activity.user} {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

