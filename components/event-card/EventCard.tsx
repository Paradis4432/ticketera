import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface Event {
  key: number
  event: {
    id: number
    title: string
    date: string
    location: string
    price: string
  }
}

const EventCard = ({ event }: Event) => {
  return (
    <Card key={event.id}>
      <CardHeader>
        <div className="h-48 bg-gray-200 rounded-t-lg"></div>
      </CardHeader>
      <CardContent>
        <CardTitle>{event.title}</CardTitle>
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">{event.price}</span>
        <Link href={`/buyer-events/${event.id}`}>
          <Button>Comprar Tickets</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default EventCard
