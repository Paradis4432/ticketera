import EventCard from "@/components/event-card/EventCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  title: string
  date: string
  location: string
  price: string
}

export default function TicketManagement() {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de Junio 2024 a las 23:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
    {
      id: 2,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "10 de Junio 2024 a las 22:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
    {
      id: 3,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "15 de Junio 2024 a las 23:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
    {
      id: 4,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "20 de Junio 2024 a las 23:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
  ]

  const completedEvents: Event[] = [
    {
      id: 5,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "01 de Junio 2024 a las 23:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
    {
      id: 6,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "05 de Junio 2024 a las 23:00",
      location: "Calle Costa Sagunto",
      price: "$9000",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href={"/"}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <span className="bg-red-500 text-white p-1 rounded mr-2">🎫</span>
          Todos Tus Tickets.
        </h1>
        <p className="text-gray-600 mb-8">
          Descubre La Lista De Todos Los Tickets Para Tus Eventos.
        </p>

        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          Próximos Eventos.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="text-white p-1 rounded mr-2">🔴</span>
          Eventos Finalizados.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
