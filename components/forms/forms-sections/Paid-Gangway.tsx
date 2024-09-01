"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function PaidGangway() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cvuCbu, setCvuCbu] = useState("")

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value)
  }

  const handleCvuCbuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvuCbu(e.target.value)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="w-1/2 p-8 overflow-y-auto">
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Pasarela de Pago.</h2>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-method">Método de Pago</Label>
                <Select onValueChange={handlePaymentMethodChange}>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="Selecciona un método de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mercado-pago">Mercado Pago</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvu-cbu">CVU - CBU del Deposito</Label>
                <Input
                  id="cvu-cbu"
                  placeholder="00399302374300172"
                  value={cvuCbu}
                  onChange={handleCvuCbuChange}
                />
              </div>

              <Button className="w-full">
                Siguiente
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
