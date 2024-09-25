"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palmtree } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:block lg:flex-1 bg-[url('/images/bgimage.png?height=1080&width=1080')] bg-cover bg-center items-center justify-center">
        <Image width={40} height={40} src={"/images/isoColW.png"} alt="logo" />
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <Palmtree className="h-6 w-6" />
              <CardTitle className="text-2xl font-bold">
                Iniciar Sesión
              </CardTitle>
            </div>
            <CardDescription>
              Elige tu método de inicio de sesión preferido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full mt-2 h-11"
              onClick={() => console.log("Google sign-in clicked")}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Iniciar Sesión con Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </div>
            <div className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Regístrate
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
