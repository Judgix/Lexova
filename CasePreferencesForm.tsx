"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

const casePreferencesSchema = z.object({
  preferredAreas: z.array(z.string()).min(1, { message: "Please select at least one area of law." }),
})

const legalAreas = [
  { id: "family", label: "Family Law" },
  { id: "criminal", label: "Criminal Law" },
  { id: "corporate", label: "Corporate Law" },
  { id: "intellectual_property", label: "Intellectual Property" },
  { id: "real_estate", label: "Real Estate Law" },
  { id: "immigration", label: "Immigration Law" },
]

export function CasePreferencesForm() {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<z.infer<typeof casePreferencesSchema>>({
    resolver: zodResolver(casePreferencesSchema),
    defaultValues: {
      preferredAreas: [],
    },
  })

  function onSubmit(values: z.infer<typeof casePreferencesSchema>) {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSaving(false)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="preferredAreas"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Preferred Areas of Law</FormLabel>
              </div>
              {legalAreas.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="preferredAreas"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter((value) => value !== item.id))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Case Preferences"}
        </Button>
      </form>
    </Form>
  )
}

