"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PaymentSettings() {
  const [paymentMethods, setPaymentMethods] = useState({
    creditCard: true,
    paypal: true,
    bankTransfer: false,
  })

  const [stripeApiKey, setStripeApiKey] = useState("")

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving payment settings:", { paymentMethods, stripeApiKey })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Enabled Payment Methods</h3>
        <div className="mt-2 space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="creditCard"
              checked={paymentMethods.creditCard}
              onCheckedChange={(checked) => setPaymentMethods({ ...paymentMethods, creditCard: checked as boolean })}
            />
            <Label htmlFor="creditCard">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="paypal"
              checked={paymentMethods.paypal}
              onCheckedChange={(checked) => setPaymentMethods({ ...paymentMethods, paypal: checked as boolean })}
            />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="bankTransfer"
              checked={paymentMethods.bankTransfer}
              onCheckedChange={(checked) => setPaymentMethods({ ...paymentMethods, bankTransfer: checked as boolean })}
            />
            <Label htmlFor="bankTransfer">Bank Transfer</Label>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="stripeApiKey">Stripe API Key</Label>
        <Input
          id="stripeApiKey"
          value={stripeApiKey}
          onChange={(e) => setStripeApiKey(e.target.value)}
          placeholder="Enter Stripe API Key"
          className="mt-1"
        />
      </div>
      <Button onClick={handleSave}>Save Payment Settings</Button>
    </div>
  )
}

