"use client"

import { useState, useCallback, useMemo } from "react"
import { Calendar, momentLocalizer, type SlotInfo } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Button } from "@/components/ui/button"

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

type AvailabilityEvent = {
  start: Date
  end: Date
  title: string
  isAvailable: boolean
}

type AvailabilityCalendarProps = {
  selectedDays: string[]
}

export function AvailabilityCalendar({ selectedDays }: AvailabilityCalendarProps) {
  const [events, setEvents] = useState<AvailabilityEvent[]>([])
  const [isSaving, setIsSaving] = useState(false)

  const handleSelectSlot = useCallback((slotInfo: SlotInfo) => {
    const newEvent: AvailabilityEvent = {
      start: slotInfo.start,
      end: slotInfo.end,
      title: "Available",
      isAvailable: true,
    }

    setEvents((prev) => {
      const conflictingEventIndex = prev.findIndex(
        (event) => event.start.getTime() === newEvent.start.getTime() && event.end.getTime() === newEvent.end.getTime(),
      )

      if (conflictingEventIndex > -1) {
        const updatedEvents = [...prev]
        updatedEvents.splice(conflictingEventIndex, 1)
        return updatedEvents
      } else {
        return [...prev, newEvent]
      }
    })
  }, [])

  const eventStyleGetter = useCallback((event: AvailabilityEvent) => {
    return {
      style: {
        backgroundColor: event.isAvailable ? "#10B981" : "#EF4444",
      },
    }
  }, [])

  const filteredEvents = useMemo(() => {
    if (selectedDays.length === 0) return events
    return events.filter((event) => selectedDays.includes(moment(event.start).format("dddd").toLowerCase()))
  }, [events, selectedDays])

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call to save availability
    setTimeout(() => {
      console.log("Saving availability:", events)
      setIsSaving(false)
      // Here you would typically send the events to your backend
    }, 2000)
  }

  return (
    <div className="h-[600px]">
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        step={60}
        timeslots={1}
        defaultView="week"
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Availability"}
        </Button>
      </div>
    </div>
  )
}

