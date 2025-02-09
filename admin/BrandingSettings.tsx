"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ColorPicker } from "@/components/ui/color-picker"
import Link from "next/link"

export function BrandingSettings() {
  const [logoUrl, setLogoUrl] = useState("")
  const [primaryColor, setPrimaryColor] = useState("#3B82F6")
  const [secondaryColor, setSecondaryColor] = useState("#10B981")

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving branding settings:", { logoUrl, primaryColor, secondaryColor })
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="logoUrl">Logo URL</Label>
        <Input
          id="logoUrl"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
          placeholder="Enter logo URL"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="primaryColor">Primary Color</Label>
        <ColorPicker id="primaryColor" color={primaryColor} onChange={setPrimaryColor} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="secondaryColor">Secondary Color</Label>
        <ColorPicker id="secondaryColor" color={secondaryColor} onChange={setSecondaryColor} className="mt-1" />
      </div>
      <Button onClick={handleSave}>Save Branding Settings</Button>
      <div>
        <Button asChild variant="outline">
          <Link href="/admin/branding-customization">Advanced Branding Customization</Link>
        </Button>
      </div>
    </div>
  )
}

