import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"

const cartItems = [
  { id: 1, name: "T-Shirt", price: 19.99, quantity: 2 },
  { id: 2, name: "Jeans", price: 49.99, quantity: 1 },
  { id: 3, name: "Sneakers", price: 79.99, quantity: 1 },
]

export default function CheckoutSection() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = 10
  const total = subtotal + shipping

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {/* <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input className="h-11" id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input className="h-11" id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  className="h-11"
                  id="address"
                  placeholder="123 Main St"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input className="h-11" id="city" placeholder="New York" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input className="h-11" id="postalCode" placeholder="10001" />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger className="h-11" id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section> */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    className="h-11"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expirationDate">Expiration Date</Label>
                    <Input
                      className="h-11"
                      id="expirationDate"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input className="h-11" id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input className="h-11" id="nameOnCard" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="surnmameOnCard">Surname on Card</Label>
                  <Input
                    className="h-11"
                    id="surnmameOnCard"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <Button className="w-full mt-8 h-11" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" /> Place Order
                  </Button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="bg-gray-50 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </section>
            <div>
              <p className="text-muted-foreground text-sm font-normal mt-4">
                All payments are processed securely by{" "}
                <span className="text-primary cursor-pointer">
                  Mercado Pago
                </span>
                . By placing an order, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
