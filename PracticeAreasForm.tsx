"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trash2 } from "lucide-react"

const formSchema = z.object({
  practiceAreas: z.array(
    z.object({
      name: z.string().min(2, { message: "Practice area name must be at least 2 characters." }),
      description: z.string().max(500, { message: "Description must not exceed 500 characters." }),
    }),
  ),
})

export function PracticeAreasForm() {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      practiceAreas: [{ name: "", description: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "practiceAreas",
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
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
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4">
            <FormField
              control={form.control}
              name={`practiceAreas.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Practice Area Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Corporate Law" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`practiceAreas.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your experience in this practice area..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Maximum 500 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="button" variant="outline" onClick={() => remove(index)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Remove Practice Area
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" onClick={() => append({ name: "", description: "" })}>
          Add Practice Area
        </Button>
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  )
}

