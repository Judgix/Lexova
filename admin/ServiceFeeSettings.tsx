"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function ServiceFeeSettings() {
  const [platformFee, setPlatformFee] = useState("10")
  const [lawyerCommission, setLawyerCommission] = useState("80")

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving service fee settings:", { platformFee, lawyerCommission })
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="platformFee">Platform Fee (%)</Label>
        <Input
          id="platformFee"
          type="number"
          value={platformFee}
          onChange={(e) => setPlatformFee(e.target.value)}
          min="0"
          max="100"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="lawyerCommission">Lawyer Commission (%)</Label>
        <Input
          id="lawyerCommission"
          type="number"
          value={lawyerCommission}
          onChange={(e) => setLawyerCommission(e.target.value)}
          min="0"
          max="100"
          className="mt-1"
        />
      </div>
      <Button onClick={handleSave}>Save Fee Settings</Button>
      <div>
        <Button asChild variant="outline">
          <Link href="/admin/commission-structure">View Detailed Commission Structure</Link>
        </Button>
      </div>
    </div>
  )
}

