import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ShoppingBag, X, Plus, Minus } from "lucide-react"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    quantity: 2,
    image: "/image-empty.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    quantity: 1,
    image: "/image-empty.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 79.99,
    quantity: 1,
    image: "/image-empty.svg?height=80&width=80",
  },
]

export default function ShoppingCartAside() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleCart = () => setIsOpen(!isOpen)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative z-20"
        onClick={toggleCart}
        aria-label="Toggle shopping cart"
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {totalItems}
        </span>
      </Button>

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Tu Carrito ({totalItems})</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              aria-label="Close cart"
            >
              <X className="h-6 w-6" />
            </Button>
          </header>

          <ScrollArea className="flex-grow p-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </ScrollArea>

          <footer className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Link href={"/checkout"}>
              <Button className="w-full" size="lg">
                Continuar a Pagar
              </Button>
            </Link>
          </footer>
        </div>
      </aside>
    </>
  )
}
