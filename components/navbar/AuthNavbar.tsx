import React, { Dispatch, SetStateAction } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, Home, LogOut, Ticket, User, UserCircle } from "lucide-react"
import Link from "next/link"
import ShoppingCartAside from "../shoping-cart/ShoppingCart"

const AuthNavbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">🎫 Selva Tickets</span>
        </div>
        <div className="flex flex-row items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <span className="sr-only">Open user menu</span>
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-3 space-y-3">
              <DropdownMenuItem className="p-2.5 cursor-pointer">
                <Home className="mr-2 h-4 w-4" />
                <Link href="/">Inicio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2.5 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <Link href="/user-profile">Mi Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2.5 cursor-pointer">
                <Ticket className="mr-2 h-4 w-4" />
                <Link href="/my-tickets">Mis Tickets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2.5 cursor-pointer">
                <Calendar className="mr-2 h-4 w-4" />
                <Link href="/my-events">Ver Eventos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2.5 cursor-pointer text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <Link href="#">Cerrar Sesion</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>
            <ShoppingCartAside />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AuthNavbar
