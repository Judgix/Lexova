"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentList } from "@/components/admin/ContentList"
import { AddContentModal } from "@/components/admin/AddContentModal"
import { ArrowLeft, Plus } from "lucide-react"

export default function ContentManagementPage() {
  const [activeTab, setActiveTab] = useState("legal_knowledge")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Content</CardTitle>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New Content
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="legal_knowledge">Legal Knowledge</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="user_info">User Info</TabsTrigger>
              <TabsTrigger value="lawyer_info">Lawyer Info</TabsTrigger>
            </TabsList>
            <TabsContent value="legal_knowledge">
              <ContentList contentType="legal_knowledge" />
            </TabsContent>
            <TabsContent value="faqs">
              <ContentList contentType="faqs" />
            </TabsContent>
            <TabsContent value="user_info">
              <ContentList contentType="user_info" />
            </TabsContent>
            <TabsContent value="lawyer_info">
              <ContentList contentType="lawyer_info" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <AddContentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} contentType={activeTab} />
    </div>
  )
}

