import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import React from "react"
import { Calendar } from "lucide-react"
import CardEvents from "@/components/dashboard/CardEvents"
import Link from "next/link"

const MyEvents = () => {
  return (
    <section className="flex h-screen bg-gray-100 ml-64">
      <div className="flex-1 p-8 overflow-y-auto space-y-8">
        <div className="flex-1 flex items-center h-20 justify-between">
          <h1 className="text-3xl font-bold my-6">Todos tus Eventos.</h1>
          <Link href={"/dashboard/create-event"}>
            <Button
              variant="default"
              className="bg-black flex flex-row gap-2 py-4"
            >
              <Calendar className="size-5" />
              Crear Evento
            </Button>
          </Link>
        </div>
        <Separator className="mt-3 bg-black/20" />
        <CardEvents />
      </div>
    </section>
  )
}

export default MyEvents
