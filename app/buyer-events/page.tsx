import React from "react"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
    {
      id: 1,
      title: "Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.",
      date: "08 De Junio 2024 A Las 23:55",
      location: "Cali, Costa Sagrada",
      price: "$8000",
      type: "Sold Out",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Todos Los Eventos Disponibles.
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Busca Todos Los Eventos Que Existen En Nuestra Plataforma.
      </p>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-grow">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                {event.type}
              </div>
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-1">{event.date}</p>
              <p className="text-gray-600 text-sm mb-2">{event.location}</p>
              <p className="text-gray-800 font-semibold mb-4">
                A Partir De {event.price}
              </p>
              <Button className="w-full">Comprar Tickets</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <Button variant="outline" className="rounded-l-md">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline">5</Button>
          <Button variant="outline" className="rounded-r-md">
            ...
          </Button>
        </nav>
      </div>
    </div>
  )
}
