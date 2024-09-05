import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { UserCircle, Mail } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  type: "RRPP" | "Validador" | "Partner"
}

function UserCard({
  user,
  isSelected,
  onSelect,
}: {
  user: User
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <Card className="relative">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <UserCircle className="w-6 h-6 text-gray-500" />
        </div>
        <div className="flex-grow">
          <h4 className="font-semibold">{user.name}</h4>
          <p className="text-sm text-gray-500 flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            {user.email}
          </p>
        </div>
        <Checkbox
          checked={isSelected}
          onCheckedChange={onSelect}
          className="absolute top-2 right-2"
        />
      </CardContent>
    </Card>
  )
}

export default function UsersForm() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "2",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "3",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "4",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "RRPP",
    },
    {
      id: "5",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Validador",
    },
    {
      id: "6",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Validador",
    },
    {
      id: "7",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Validador",
    },
    {
      id: "8",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Validador",
    },
    {
      id: "9",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Partner",
    },
    {
      id: "10",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Partner",
    },
    {
      id: "11",
      name: "Jonathan Guidi",
      email: "jguidi.info@gmail.com",
      type: "Partner",
    },
  ])

  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())

  const toggleUser = (userId: string) => {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(userId)) {
        newSet.delete(userId)
      } else {
        newSet.add(userId)
      }
      return newSet
    })
  }

  const selectAllOfType = (type: "RRPP" | "Validador" | "Partner") => {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev)
      users
        .filter((user) => user.type === type)
        .forEach((user) => newSet.add(user.id))
      return newSet
    })
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mt-6 space-y-8">
          {["RRPP", "Validador", "Partner"].map((type) => (
            <div key={type}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  Lista de Tus Usuarios {type}
                </h2>
                <Button
                  variant="outline"
                  onClick={() =>
                    selectAllOfType(type as "RRPP" | "Validador" | "Partner")
                  }
                >
                  Seleccionar Todos
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {users
                  .filter((user) => user.type === type)
                  .map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      isSelected={selectedUsers.has(user.id)}
                      onSelect={() => toggleUser(user.id)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Recuerda Crear tus Usuarios RRPP/Partners/Validadores desde el Panel
          de MIS USUARIOS. Se creará un Enlace de Afiliado por cada usuario que
          selecciones como RRPP.
        </p>

        <Button className="w-full mt-6">Continuar</Button>
      </main>
    </div>
  )
}
