"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface User {
  firstName: string
  lastName: string
  email: string
}

export default function CreateUser({
  params,
}: {
  params: { slug: "rrpp" | "validate-user" | "partner" }
}) {
  const [user, setUser] = useState<User>({
    firstName: "Jonathan",
    lastName: "Guidi",
    email: "jguidi.info@gmail.com",
  })

  const [type, setType] = useState<"rrpp" | "validate-user" | "partner">()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleTypeChange = (
    value: "Usuario RRPP" | "Usuario Validador" | "Usuario Partner"
  ) => {
    setUser((prevUser) => ({ ...prevUser, type: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement save changes logic here
    console.log("Saving user:", user)
  }

  useEffect(() => {
    console.log(params)
    if (params && params.slug) {
      setType(params.slug)
    }
  }, [params])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto space-y-8">
        <header className="flex-1 border-b border-b-black/5">
          <h1 className="text-3xl font-bold mb-6">
            Crear usuario{" "}
            {type === "rrpp"
              ? "RRPP"
              : type === "validate-user"
              ? "Validador"
              : "Partner"}
          </h1>
        </header>
        <Card className="max-w-3xl p-2">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre del usuario</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email del Usuario</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>

              <Button type="submit" className="w-full">
                Guardar Cambios
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
