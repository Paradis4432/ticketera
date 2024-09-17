import React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Home, LogOut, Ticket } from "lucide-react"
import Link from "next/link"

const AuthNavbar = () => {
  return (
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
          <DropdownMenuContent align="end" className="p-3 space-y-3">
            <DropdownMenuItem className="p-2.5 cursor-pointer">
              <Home className="mr-2 h-4 w-4" />
              <Link href="/">Inicio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2.5 cursor-pointer">
              <Ticket className="mr-2 h-4 w-4" />
              <Link href="/my-tickets">Mis Tickets</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2.5 cursor-pointer">
              <Ticket className="mr-2 h-4 w-4" />
              <Link href="my-events">Ver Eventos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2.5 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <Link href="#">Cerrar Sesion</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default AuthNavbar
