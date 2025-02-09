"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

type DayFilterProps = {
  onChange: (selectedDays: string[]) => void
}

export function DayFilter({ onChange }: DayFilterProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) => {
      const newSelection = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      onChange(newSelection)
      return newSelection
    })
  }

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {daysOfWeek.map((day) => (
        <div key={day} className="flex items-center space-x-2">
          <Checkbox id={day} checked={selectedDays.includes(day)} onCheckedChange={() => handleDayToggle(day)} />
          <Label htmlFor={day} className="capitalize">
            {day}
          </Label>
        </div>
      ))}
    </div>
  )
}

