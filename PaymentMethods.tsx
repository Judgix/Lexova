"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Trash2 } from "lucide-react"

type PaymentMethod = {
  id: string
  type: "bank" | "card"
  last4: string
  name: string
}

const mockPaymentMethods: PaymentMethod[] = [
  { id: "1", type: "card", last4: "4242", name: "Visa ending in 4242" },
  { id: "2", type: "bank", last4: "1234", name: "Bank Account ending in 1234" },
]

export function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(mockPaymentMethods)
  const [newMethodType, setNewMethodType] = useState<"bank" | "card">("card")

  const handleAddPaymentMethod = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Adding new payment method:", newMethodType)
    // Reset form or show success message
  }

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== id))
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Your Payment Methods</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="flex justify-between items-center p-4">
                <div className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>{method.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => handleRemovePaymentMethod(method.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Add New Payment Method</h3>
        <form onSubmit={handleAddPaymentMethod} className="space-y-4">
          <RadioGroup value={newMethodType} onValueChange={(value: "bank" | "card") => setNewMethodType(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank">Bank Account</Label>
            </div>
          </RadioGroup>

          {newMethodType === "card" && (
            <>
              <Input placeholder="Card Number" />
              <div className="flex space-x-4">
                <Input placeholder="MM/YY" className="w-1/2" />
                <Input placeholder="CVC" className="w-1/2" />
              </div>
            </>
          )}

          {newMethodType === "bank" && (
            <>
              <Input placeholder="Account Number" />
              <Input placeholder="Routing Number" />
            </>
          )}

          <Button type="submit">Add Payment Method</Button>
        </form>
      </div>
    </div>
  )
}

