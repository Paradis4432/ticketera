"use client"

import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const events = [
  {
    title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
    date: "08 de junio 2024 a las 23:30",
    location: "Cali, Costa aseguero",
    price: "$8000",
  },
  {
    title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
    date: "08 de junio 2024 a las 23:30",
    location: "Cali, Costa aseguero",
    price: "$8000",
  },
  {
    title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
    date: "08 de junio 2024 a las 23:30",
    location: "Cali, Costa aseguero",
    price: "$8000",
  },
  {
    title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
    date: "08 de junio 2024 a las 23:30",
    location: "Cali, Costa aseguero",
    price: "$8000",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Proximamente En Selva Tickets.</h2>
        <span className="text-sm px-3 py-1 rounded-full font-semibold">
          Mucho Mas Que Eventos.
        </span>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="h-full shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <span className="font-bold">{event.price}</span>
                  <Button>Comprar Tickets</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
