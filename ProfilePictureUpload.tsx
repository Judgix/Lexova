"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProfilePictureUpload() {
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

  const handleUpload = () => {
    // Implement the actual upload logic here
    console.log("Uploading profile picture...")
  }

  return (
    <div className="space-y-4">
      {previewUrl && (
        <Image
          src={previewUrl || "/placeholder.svg"}
          alt="Profile picture preview"
          width={100}
          height={100}
          className="rounded-full"
        />
      )}
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={!previewUrl}>
        Upload Picture
      </Button>
    </div>
  )
}

