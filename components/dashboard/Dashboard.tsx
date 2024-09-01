"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  DollarSign,
  Edit,
  BarChart2,
  Trash2,
  Ticket,
  X,
  AlertTriangle,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Dashboard() {
  const [hasEvents, setHasEvents] = useState(true)
  const router = useRouter()

  const stats = [
    { title: "Total de Eventos", value: "41" },
    { title: "Total de Eventos Activos", value: "12" },
    { title: "Stock de entradas", value: "8204", change: "-5.2%" },
    { title: "Usuarios Totales", value: "11.5k", change: "+22%" },
    { title: "Usuarios Activos", value: "1.5k", change: "+22%" },
    { title: "Entradas Vendidas Totales", value: "9.352", change: "+8%" },
    { title: "Entradas de Eventos Activos", value: "836", change: "-1.2%" },
    { title: "Evento con mayor ventas", value: "EventName" },
    { title: "Evento con menor stock", value: "EventName" },
  ]

  const events = [
    {
      id: 1,
      title: "DÍA DEL AMIGO",
      description: "Etiam nulla lectus amet nunc molestie at vulputate.",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
      image: "/image-empty.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "DÍA DEL AMIGO",
      description: "Etiam nulla lectus amet nunc molestie at vulputate.",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
      image: "/image-empty.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-100 ml-64">
      {/* Main content */}

      <div
        className={cn("container mx-auto p-4", {
          "w-full min-h-screen flex items-center justify-center": !hasEvents,
        })}
      >
        {hasEvents ? (
          <>
            <h1 className="text-3xl font-bold my-6">
              Bienvenido, Gravity Producciones!
              <Separator className="mt-3 bg-black/20" />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    {stat.change && (
                      <Badge
                        variant={
                          stat.change.startsWith("+")
                            ? "default"
                            : "destructive"
                        }
                      >
                        {stat.change}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Eventos en Curso.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">
                        {event.title}
                      </CardTitle>
                      <Badge variant="outline">En vivo</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <DollarSign className="mr-2 h-4 w-4" />
                        {event.price}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="h-9" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Button>
                    <Link href={"/metricas"}>
                      <Button variant="outline" className="h-9" size="sm">
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Ver Métricas
                      </Button>
                    </Link>

                    <Dialog>
                      <DialogTrigger className="h-9 px-4 py-2 text-red-500 hover:text-red-700 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Eliminar
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6 text-red-500" />
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <Card className="w-full max-w-md mx-auto my-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <X className="text-red-500 mr-2 h-8 w-8" />
                ¡Lo Siento!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                Debes Crear un Evento para poder visualizar todas tus métricas.
              </p>
              <Button onClick={() => router.push("/create")}>
                <Ticket className="mr-2 h-4 w-4" />
                Crear Evento
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
