import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type CaseDetailsProps = {
  caseId: string
}

export function CaseDetails({ caseId }: CaseDetailsProps) {
  // In a real application, you would fetch the case details using the caseId
  const caseDetails = {
    title: "Contract Dispute",
    client: "John Doe",
    lawyer: "Jane Smith",
    status: "Active",
    startDate: "2023-05-15",
    lastUpdated: "2023-06-24",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Case Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Case ID</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseId}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.title}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Client</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.client}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Lawyer</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.lawyer}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.status}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Start Date</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.startDate}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
            <dd className="mt-1 text-sm text-gray-900">{caseDetails.lastUpdated}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

