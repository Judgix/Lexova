"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PhotoUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <Label htmlFor="photo-upload">Profile Photo</Label>
      <div className="flex items-center space-x-4">
        {previewUrl && (
          <Image
            src={previewUrl || "/placeholder.svg"}
            alt="Profile picture preview"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        )}
        <Input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} />
      </div>
    </div>
  )
}

