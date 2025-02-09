"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const biographySchema = z.object({
  biography: z
    .string()
    .min(10, { message: "Biography must be at least 10 characters." })
    .max(500, { message: "Biography must not exceed 500 characters." }),
})

export function BiographyForm() {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<z.infer<typeof biographySchema>>({
    resolver: zodResolver(biographySchema),
    defaultValues: {
      biography: "",
    },
  })

  function onSubmit(values: z.infer<typeof biographySchema>) {
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
          name="biography"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Biography"}
        </Button>
      </form>
    </Form>
  )
}

