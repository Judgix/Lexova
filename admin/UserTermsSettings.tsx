"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function UserTermsSettings() {
  const [termsOfService, setTermsOfService] = useState("")
  const [privacyPolicy, setPrivacyPolicy] = useState("")

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving user terms settings:", { termsOfService, privacyPolicy })
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="termsOfService">Terms of Service</Label>
        <Textarea
          id="termsOfService"
          value={termsOfService}
          onChange={(e) => setTermsOfService(e.target.value)}
          rows={10}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="privacyPolicy">Privacy Policy</Label>
        <Textarea
          id="privacyPolicy"
          value={privacyPolicy}
          onChange={(e) => setPrivacyPolicy(e.target.value)}
          rows={10}
          className="mt-1"
        />
      </div>
      <Button onClick={handleSave}>Save User Terms</Button>
      <div>
        <Button asChild variant="outline">
          <Link href="/admin/terms-editor">Open Full Terms Editor</Link>
        </Button>
      </div>
    </div>
  )
}

