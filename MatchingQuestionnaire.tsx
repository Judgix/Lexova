"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  caseType: z.string().min(1, { message: "Please select a case type" }),
  urgency: z.string().min(1, { message: "Please select an urgency level" }),
  location: z.string().min(1, { message: "Please enter your location" }),
  budget: z.string().min(1, { message: "Please enter your budget" }),
  description: z.string().min(10, { message: "Please provide a brief description of your case" }),
})

type MatchingQuestionnaireProps = {
  onMatchingComplete: (lawyers: Lawyer[]) => void
}

export function MatchingQuestionnaire({ onMatchingComplete }: MatchingQuestionnaireProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseType: "",
      urgency: "",
      location: "",
      budget: "",
      description: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    // Simulate API call to match lawyers
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    // Mock matched lawyers data
    const mockLawyers: Lawyer[] = [
      {
        id: "1",
        name: "Jane Smith",
        photo: "/placeholder.svg?height=100&width=100",
        specializations: ["Contract Law", "Corporate Law"],
        rating: 4.8,
        fees: "$250/hour",
      },
      {
        id: "2",
        name: "John Doe",
        photo: "/placeholder.svg?height=100&width=100",
        specializations: ["Family Law", "Estate Planning"],
        rating: 4.5,
        fees: "$200/hour",
      },
      {
        id: "3",
        name: "Alice Johnson",
        photo: "/placeholder.svg?height=100&width=100",
        specializations: ["Criminal Law", "Civil Litigation"],
        rating: 4.9,
        fees: "$300/hour",
      },
      {
        id: "4",
        name: "Bob Williams",
        photo: "/placeholder.svg?height=100&width=100",
        specializations: ["Intellectual Property", "Technology Law"],
        rating: 4.7,
        fees: "$275/hour",
      },
      {
        id: "5",
        name: "Emily Brown",
        photo: "/placeholder.svg?height=100&width=100",
        specializations: ["Environmental Law", "Administrative Law"],
        rating: 4.6,
        fees: "$225/hour",
      },
    ]

    onMatchingComplete(mockLawyers)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="caseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Case Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a case type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="contract">Contract Dispute</SelectItem>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="criminal">Criminal Defense</SelectItem>
                  <SelectItem value="personal-injury">Personal Injury</SelectItem>
                  <SelectItem value="estate">Estate Planning</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Urgency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low - No immediate deadline</SelectItem>
                  <SelectItem value="medium">Medium - Needed within a month</SelectItem>
                  <SelectItem value="high">High - Needed within a week</SelectItem>
                  <SelectItem value="urgent">Urgent - Needed immediately</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city or state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget</FormLabel>
              <FormControl>
                <Input placeholder="Enter your budget (e.g., $1000, $200/hour)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Case Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe your legal issue" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Matching..." : "Find Matching Lawyers"}
        </Button>
      </form>
    </Form>
  )
}

