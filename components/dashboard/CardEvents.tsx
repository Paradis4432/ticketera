import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertTriangle,
  BarChart2,
  CalendarDays,
  DollarSign,
  Edit,
  MapPin,
  Trash2,
} from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const CardEvents = () => {
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
    <section className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Eventos en Curso.</h2>

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
                    ¿Deseas eliminar este Evento? Una vez eliminado el Evento,
                    no se podrá recuperar.
                  </DialogDescription>
                  <div className="flex flex-1 gap-3">
                    <Button className="w-1/2" variant="outline">
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
    </section>
  )
}

export default CardEvents
