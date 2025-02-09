import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function UserRatings() {
  const rating = 4.8
  const totalReviews = 56

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Ratings</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 ${star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-2xl font-bold">{rating.toFixed(1)}</p>
        <p className="text-sm text-muted-foreground">Based on {totalReviews} reviews</p>
      </CardContent>
    </Card>
  )
}

