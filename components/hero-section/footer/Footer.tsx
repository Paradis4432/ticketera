"use client"

import { Instagram, Linkedin, MessageCircle, Rocket } from "lucide-react"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()
  return (
    <>
      {!pathname.includes("/dashboard") ? (
        <footer className="bg-blue-600 text-white h-[20vh] flex items-center justify-center">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link
                  href="/"
                  className="text-2xl flex flex-row gap-4 font-bold"
                >
                  <Rocket className="size-8" /> Selva Tickets
                </Link>
              </div>
              <nav className="mb-4 md:mb-0">
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="hover:underline">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex space-x-6">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  )
}

export default Footer
