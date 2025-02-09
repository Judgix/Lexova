import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Case = {
  id: string
  title: string
  client: string
  status: string
  lastUpdated: string
}

type CaseDetailsProps = {
  caseData: Case
}

export function CaseDetails({ caseData }: CaseDetailsProps) {
  const [status, setStatus] = useState(caseData.status)

  const handleAcceptCase = () => {
    setStatus("Active")
  }

  const handleDeclineCase = () => {
    setStatus("Declined")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{caseData.title}</span>
          <Badge variant={status === "Active" ? "default" : status === "Pending" ? "secondary" : "destructive"}>
            {status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Client Information</h3>
            <p>{caseData.client}</p>
          </div>
          <div>
            <h3 className="font-semibold">Last Updated</h3>
            <p>{caseData.lastUpdated}</p>
          </div>
          <div>
            <h3 className="font-semibold">Important Dates</h3>
            <ul className="list-disc list-inside">
              <li>Case Opened: 2023-06-15</li>
              <li>Next Hearing: 2023-07-10</li>
              <li>Document Submission Deadline: 2023-06-30</li>
            </ul>
          </div>
          {status === "Pending" && (
            <div className="flex space-x-4">
              <Button onClick={handleAcceptCase}>Accept Case</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Decline Case</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently decline the case and remove it from your
                      active cases.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeclineCase}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

