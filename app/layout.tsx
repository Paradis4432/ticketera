import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Koulen } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import { Providers } from "@/utils/providers"
import SideBar from "@/components/sidebar/SideBar"

const inter = Inter({ subsets: ["latin"] })
//Koulen Font
const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koulen",
})

export const metadata: Metadata = {
  title: "Ticketera",
  description: "Ticketera",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SideBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
