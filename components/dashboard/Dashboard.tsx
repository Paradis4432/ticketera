"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, X } from "lucide-react"

import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import CardEvents from "./CardEvents"

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

  return (
    <div className="flex h-screen bg-gray-100 ml-64">
      {/* Main content */}

      <div
        className={cn("flex-1 p-8 overflow-y-auto space-y-8", {
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

            <CardEvents />
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
