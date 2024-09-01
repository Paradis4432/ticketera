"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Download, Upload } from "lucide-react"

export default function EmailEntries() {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [selectedStage, setSelectedStage] = useState("")
  const [ticketCount, setTicketCount] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const handleSendTickets = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement ticket sending logic here
    console.log("Sending tickets:", {
      selectedEvent,
      selectedStage,
      ticketCount,
      userEmail,
    })
  }

  const handleDownloadCSV = () => {
    // Implement CSV download logic here
    console.log("Downloading CSV")
  }

  const handleUploadCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Implement CSV upload logic here
      console.log("Uploading CSV:", file.name)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">
          Completa el siguiente formulario:
        </h1>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSendTickets} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-select">
                  Selecciona el evento que deseas enviar.
                </Label>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger id="event-select">
                    <SelectValue placeholder="EventName" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event1">Event 1</SelectItem>
                    <SelectItem value="event2">Event 2</SelectItem>
                    <SelectItem value="event3">Event 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage-select">
                  Selecciona el tipo de Stage que deseas enviar.
                </Label>
                <Select value={selectedStage} onValueChange={setSelectedStage}>
                  <SelectTrigger id="stage-select">
                    <SelectValue placeholder="Stage 2 - 391 Entradas Disponibles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stage1">
                      Stage 1 - 200 Entradas Disponibles
                    </SelectItem>
                    <SelectItem value="stage2">
                      Stage 2 - 391 Entradas Disponibles
                    </SelectItem>
                    <SelectItem value="stage3">
                      Stage 3 - 150 Entradas Disponibles
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-count">
                  Numero de entradas a enviar.
                </Label>
                <Input
                  id="ticket-count"
                  type="number"
                  placeholder="2"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="user-email">
                  Email del Usuario a enviar entradas.
                </Label>
                <Input
                  id="user-email"
                  type="email"
                  placeholder="jguidi.info@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar Tickets
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Todos tus Eventos.</h2>
            <div className="space-x-2">
              <Button variant="outline" onClick={handleDownloadCSV}>
                <Download className="mr-2 h-4 w-4" />
                Descargar .CSV
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("csv-upload")?.click()}
              >
                <Upload className="mr-2 h-4 w-4" />
                Cargar .CSV
              </Button>
              <input
                id="csv-upload"
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleUploadCSV}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Puedes descargar la Planilla .CSV y completar con los datos
            correspondientes para enviar entradas de forma masiva. Si el
            documento .CSV no contiene las columnas correctamente, no se
            enviaran las entradas.
          </p>
          <p className="text-sm text-gray-500">
            Columnas del CSV:
            <br />
            Evento, Tipo de Entradas, Numero de Entradas, Email del usuario
            destinatario.
          </p>
        </div>
      </main>
    </div>
  )
}
