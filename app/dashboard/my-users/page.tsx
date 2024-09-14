"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Ticket,
  Users,
  CreditCard,
  UserCircle,
  LogOut,
  UserPlus,
  Edit,
  Trash2,
} from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  type: "RRPP" | "Validador" | "Partner"
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "2",
      name: "Tadeo Laurent",
      email: "tadeo.laurent@gmail.com",
      type: "Validador",
    },
    {
      id: "3",
      name: "Santiago Gomez",
      email: "santiago.gomez@gmail.com",
      type: "Partner",
    },
    {
      id: "4",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "5",
      name: "Tadeo Laurent",
      email: "tadeo.laurent@gmail.com",
      type: "Validador",
    },
    {
      id: "6",
      name: "Santiago Gomez",
      email: "santiago.gomez@gmail.com",
      type: "Partner",
    },
    {
      id: "7",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "8",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
  ])

  const handleCreateUser = (type: "RRPP" | "Validador" | "Partner") => {
    // Implement user creation logic here
    console.log(`Creating ${type} user`)
  }

  const handleEditUser = (userId: string) => {
    // Implement user editing logic here
    console.log(`Editing user with ID: ${userId}`)
  }

  const handleDeleteUser = (userId: string) => {
    // Implement user deletion logic here
    console.log(`Deleting user with ID: ${userId}`)
  }

  return (
    <div className="flex h-screen bg-gray-100 ml-64">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto space-y-8">
        <h1 className="text-3xl font-bold mb-6">Creación de Usuarios</h1>

        <div className="flex space-x-4 mb-8">
          <Link href={"/dashboard/my-users/create/rrpp"}>
            <Button className="bg-black text-white py-4">
              <UserPlus className="mr-2 h-4 w-4" />
              Crear Usuario RRPP
            </Button>
          </Link>
          <Link href={"/dashboard/my-users/create/validate-user"}>
            <Button className="bg-black text-white py-4">
              <UserPlus className="mr-2 h-4 w-4" />
              Crear Usuario Validador
            </Button>
          </Link>
          <Link href={"/dashboard/my-users/create/partner"}>
            <Button className="bg-black text-white py-4">
              <UserPlus className="mr-2 h-4 w-4" />
              Crear Usuario Partner
            </Button>
          </Link>
        </div>
        <Separator className="bg-black/20" />
        <h2 className="text-2xl font-bold mb-4">Tus Usuarios Activos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <Card key={user.id} className="relative min-h-[220px]">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <UserCircle className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-foreground-muted my-2 mt-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo vitae provident enim assumenda quod nihil
                    accusantium molestias tempore cupiditate laborum.
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <Link href={"/dashboard/my-users/edit"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 px-4 py-2"
                      onClick={() => handleEditUser(user.id)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger className="h-10 px-4 py-2 text-red-500 hover:text-red-700 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Eliminar
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <UserCircle className="h-6 w-6 " />
                          Eliminar Evento
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        ¿Deseas eliminar este Evento? Una vez eliminado el
                        Evento, no se podrá recuperar.
                      </DialogDescription>
                      <div className="flex flex-1 gap-3">
                        <Button className="w-1/2" variant="secondary">
                          Cancel
                        </Button>
                        <Button className="w-1/2" variant="destructive">
                          Eliminar
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
