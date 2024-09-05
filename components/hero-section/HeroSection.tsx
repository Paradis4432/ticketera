import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Rocket,
  Calendar,
  MapPin,
  ChevronRight,
  Search,
  ChevronsDown,
} from "lucide-react"
import Navbar from "../navbar/Navbar"
import Background from "../ui/backgrounds"
import { Badge } from "../ui/badge"

export default function HeroSection() {
  const events = [
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 2,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 3,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 4,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 5,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 6,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
  ]

  const upcomingEvents = [
    {
      id: 7,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 8,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 9,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
    {
      id: 10,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate",
      date: "08 de junio 2024 a las 23:30",
      location: "Cali, Costa aseguero",
      price: "$8000",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-white h-[calc(100vh_-_84px)]">
        <Background
          bg_types="lines"
          animated
          className="w-full h-full bg-box-gradient flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center flex-col justify-center">
            <h1 className="text-6xl text-black font-bold mb-4 text-center leading-tight">
              🚀 Experiencias Unicas Con <br /> Selva Tickets!
            </h1>
            <p className="w-1/4 text-center text-base mb-8 text-black/80">
              Descubre Selva Tickets, compra tus eventos de forma segura, rápida
              y sencilla, todo en un solo lugar.
            </p>
            <Button
              size="lg"
              variant="default"
              className="flex flex-row gap-1 py-4"
            >
              <ChevronsDown className="size-5" /> Ver Eventos
            </Button>
          </div>
        </Background>
      </section>

      {/* Event Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex items-center justify-center">
            <Badge className="mb-8 p-3 rounded-3xl bg-gray-500/60 text-black text-sm hover:bg-gray-500/60 select-none">
              Accesos Rápidos & seguros con nuestros QRs
            </Badge>
          </div>
          <h2 className="text-4xl font-bold mb-14 text-center">
            Todos Los Eventos Disponibles.
          </h2>
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Search for..."
                  className="px-9 h-12"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] h-12">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
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
                  <Button>Comprar Tickets</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              Ver Todos los Eventos <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              Proximamente En Selva Tickets.
            </h2>
            <Button variant="outline">Mucho Mas Que Eventos</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingEvents.map((event) => (
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
                  <Button>Comprar Tickets</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Producer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center">
            <Badge className="mb-8 px-3 py-2.5 rounded-3xl bg-gray-500/60 text-black text-xs hover:bg-gray-500/60 select-none">
              Gestión integral de eventos con Selva tickets.
            </Badge>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            ¿Sos Productor De Eventos?
          </h2>
          <p className="mb-8">Produce Tus Eventos Con Nosotros!</p>
          <Button size="lg">Registrate como Productor</Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Como Puedo Comprar Mis Tickets?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quiero Crear Mi Evento, Es Posible?
              </AccordionTrigger>
              <AccordionContent>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Como Puedo Transferir Una Entrada?
              </AccordionTrigger>
              <AccordionContent>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Se Aceptan El Pago, Para Mis Mas Tickets?
              </AccordionTrigger>
              <AccordionContent>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Necesito Ayuda, Como Puedo Contactarme?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Rocket className="h-6 w-6" />
              <span className="font-bold text-xl">Selva Tickets</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Productores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Preguntas
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm">
            © 2023 Selva Tickets. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
