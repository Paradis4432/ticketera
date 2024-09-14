"use client"

import { Rocket } from "lucide-react"
import React, { useEffect } from "react"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <>
      {!pathname.includes("/dashboard") ? (
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Rocket className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">Selva Tickets</span>
            </div>
            <nav>
              <ul className="flex space-x-12">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/buyer-events"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Productores
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Preguntas
                  </a>
                </li>
              </ul>
            </nav>
            <Button>Iniciar Sesión</Button>
          </div>
        </header>
      ) : null}
    </>
  )
}

export default Navbar
