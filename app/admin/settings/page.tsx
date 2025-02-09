"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { PaymentSettings } from "@/components/admin/PaymentSettings"
import { ServiceFeeSettings } from "@/components/admin/ServiceFeeSettings"
import { UserTermsSettings } from "@/components/admin/UserTermsSettings"
import { BrandingSettings } from "@/components/admin/BrandingSettings"

export default function SystemSettingsPage() {
  const [activeTab, setActiveTab] = useState("payment")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">System Settings</h1>
        <Button asChild variant="outline">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              <TabsTrigger value="fees">Service Fees</TabsTrigger>
              <TabsTrigger value="terms">User Terms</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
            </TabsList>
            <TabsContent value="payment">
              <PaymentSettings />
            </TabsContent>
            <TabsContent value="fees">
              <ServiceFeeSettings />
            </TabsContent>
            <TabsContent value="terms">
              <UserTermsSettings />
            </TabsContent>
            <TabsContent value="branding">
              <BrandingSettings />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

