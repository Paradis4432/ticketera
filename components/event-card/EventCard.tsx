import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, MapPin, QrCode } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import QrCard from "./QrCard"

interface Event {
  key: number
  isTicket: boolean
  event: {
    id: number
    title: string
    date: string
    location: string
    price: string
  }
}

const EventCard = ({ event, isTicket }: Event) => {
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
        {isTicket ? (
          <Dialog>
            <DialogTrigger className="flex flex-row items-center bg-primary p-2 rounded-md text-white text-sm gap-1">
              <QrCode className="mr-2 h-4 w-4" />
              Ver QR
            </DialogTrigger>
            <DialogContent className="">
              <QrCard />
            </DialogContent>
          </Dialog>
        ) : (
          <Link href={`/buyer-events/${event.id}`}>
            <Button>Comprar Tickets</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

export default EventCard
