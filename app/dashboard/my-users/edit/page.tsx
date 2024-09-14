"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Ticket,
  Users,
  CreditCard,
  UserCircle,
  LogOut,
} from "lucide-react"

interface User {
  firstName: string
  lastName: string
  email: string
  type: "Usuario RRPP" | "Usuario Validador" | "Usuario Partner"
}

export default function EditUser() {
  const [user, setUser] = useState<User>({
    firstName: "Jonathan",
    lastName: "Guidi",
    email: "jguidi.info@gmail.com",
    type: "Usuario Validador",
  })

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto space-y-8">
        <header className="flex-1 border-b border-b-black/5">
          <h1 className="text-3xl font-bold mb-6">Editar Usuario</h1>
        </header>
        <Card className="max-w-3xl p-2">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="space-y-2">
                <Label htmlFor="userType">Tipo de Usuario</Label>
                <Select value={user.type} onValueChange={handleTypeChange}>
                  <SelectTrigger id="userType">
                    <SelectValue placeholder="Selecciona el tipo de usuario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Usuario RRPP">Usuario RRPP</SelectItem>
                    <SelectItem value="Usuario Validador">
                      Usuario Validador
                    </SelectItem>
                    <SelectItem value="Usuario Partner">
                      Usuario Partner
                    </SelectItem>
                  </SelectContent>
                </Select>
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
