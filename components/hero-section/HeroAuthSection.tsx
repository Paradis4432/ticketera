import { Button } from "@/components/ui/button"
import { QrCode, Ticket, MessageCircle } from "lucide-react"

export default function HeroAuthSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-10">
          <div>
            <div className="mx-auto h-max w-max p-4 flex items-center justify-center rounded-full bg-blue-100">
              <Ticket className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              ¡Bienvenido!
            </h2>
            <p className="mt-3 text-center text-sm text-gray-600">
              Descubre Selva Tickets, compra tus eventos de forma segura, rápida
              y sencilla, todo en un solo lugar.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-row gap-3 items-center justify-center">
              <Button className="w-full h-12" variant="outline">
                <QrCode className="mr-2 h-4 w-4" />
                Mis Tickets
              </Button>
              <Button className="w-full h-12">
                <Ticket className="mr-2 h-4 w-4 text-white" />
                Comprar Tickets
              </Button>
              <Button className="w-full h-12" variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Soporte
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
