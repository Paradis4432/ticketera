import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { QrCode, Ticket, MessageCircle, Home, LogOut } from "lucide-react"

export default function HeroAuthSection() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">🎫 Selva Tickets</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Open user menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Inicio</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Ticket className="mr-2 h-4 w-4" />
                <span>Mis Tickets</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Ticket className="mr-2 h-4 w-4" />
                <span>Ver Eventos</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar Sesion</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <Ticket className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              ¡Bienvenido!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Descubre Selva Tickets, compra tus eventos de forma segura, rápida
              y sencilla, todo en un solo lugar.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Button className="w-full" variant="outline">
                <QrCode className="mr-2 h-4 w-4" />
                Mis Tickets
              </Button>
              <Button className="w-full">
                <Ticket className="mr-2 h-4 w-4" />
                Comprar Tickets
              </Button>
              <Button className="w-full" variant="outline">
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
