"use client"

import { Rocket } from "lucide-react"
import React, { Dispatch, SetStateAction, useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import AuthNavbar from "./AuthNavbar"

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <>
      {isAuthenticated ? (
        <AuthNavbar />
      ) : (
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Rocket className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">Selva Tickets</span>
            </div>
            <nav>
              <ul className="flex space-x-12">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buyer-events"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Productores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Preguntas
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href={"/login"}>
              <Button>Iniciar Sesión</Button>
            </Link>
          </div>
        </header>
      )}
    </>
  )
}

export default Navbar
