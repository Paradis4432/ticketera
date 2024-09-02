"use client"

import { Ticket } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"
import { Users, CreditCard, Home, LogOut, SquarePen } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideBar = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname !== "/login" && (
        <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold flex items-center cursor-pointer">
              <Ticket className="mr-2" />
              Selva Tickets
            </h1>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-white hover:shadow-[0_2px_5px_#000] transition-all duration-200"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Inicio
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/my-events"}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-white hover:shadow-[0_2px_5px_#000] transition-all duration-200"
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Mis Eventos
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/my-users"}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-white hover:shadow-[0_2px_5px_#000] transition-all duration-200"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Mis Usuarios
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/analitycs"}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-white hover:shadow-[0_2px_5px_#000] transition-all duration-200"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Mi Facturación
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t">
            <Button variant="ghost" className="w-full justify-start">
              <SquarePen className="mr-2 h-4 w-4" />
              Editar Perfil
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </aside>
      )}
    </>
  )
}

export default SideBar
