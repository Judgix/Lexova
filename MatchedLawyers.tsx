import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type MatchedLawyersProps = {
  lawyers: Lawyer[]
}

export function MatchedLawyers({ lawyers }: MatchedLawyersProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Matched Lawyers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawyers.map((lawyer) => (
          <Card key={lawyer.id} className="flex flex-col">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={lawyer.photo || "/placeholder.svg"}
                  alt={lawyer.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{lawyer.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{lawyer.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">Specializations: {lawyer.specializations.join(", ")}</p>
              <p className="text-sm font-semibold">Fees: {lawyer.fees}</p>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button variant="outline" asChild>
                <Link href={`/lawyer-profile/${lawyer.id}`}>View Profile</Link>
              </Button>
              <Button asChild>
                <Link href={`/dashboard/cases/new?lawyer=${lawyer.id}`}>Select Lawyer</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

