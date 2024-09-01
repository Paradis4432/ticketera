"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Ticket,
  Upload,
  Image as ImageIcon,
  Check,
  ChevronLeft,
  Calendar,
  MapPin,
} from "lucide-react"
import Image from "next/image"

interface Step {
  label: string
  status: "completed" | "current" | "upcoming"
}

function ProgressIndicator({ steps }: { steps: Step[] }) {
  return (
    <div className="w-full py-4 px-2 sm:px-0">
      <ol className="flex items-center w-full">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={`flex items-center ${
              index < steps.length - 1 ? "w-full" : ""
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
              {step.status === "completed" ? (
                <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center w-6 h-6 ${
                    step.status === "current"
                      ? "border-2 border-green-500"
                      : "border-2 border-gray-300"
                  } rounded-full`}
                >
                  <span
                    className={`text-xs font-medium ${
                      step.status === "current"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
              )}
            </div>
            <div className="ml-2 mr-2 sm:ml-4 sm:mr-4">
              <h3
                className={`text-sm font-medium ${
                  step.status === "completed"
                    ? "text-green-500"
                    : step.status === "current"
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </h3>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  step.status === "completed" ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function ConfirmEvents() {
  const [eventData, setEventData] = useState({
    name: "Selva Fest - Tech & Cachengue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
    startDate: "22/06/2024 - 23hrs",
    endDate: "23/06/2024 - 05hrs",
    location: "Cali, Costa Salguro",
    capacity: "2800",
    isAdultsOnly: true,
    minAge: "21",
  })

  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(
    "/image-empty.svg"
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEventData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setEventData((prev) => ({ ...prev, isAdultsOnly: checked }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    setImagePreview("/image-empty.svg")
  }

  return (
    <div className="flex h-full bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Confirmación del Evento.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Preview Card */}
            <Card className="bg-white overflow-hidden">
              <div className="relative h-72">
                <Image
                  width={600}
                  height={600}
                  src={imagePreview || "/image-empty.svg"}
                  alt="Event preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                  En vivo
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{eventData.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {eventData.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  {eventData.startDate}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <MapPin className="mr-2 h-4 w-4" />
                  {eventData.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Ticket className="mr-2 h-4 w-4" />${eventData.capacity}
                </div>
              </CardContent>
            </Card>

            {/* Event Details Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image-upload">Imagen del Evento</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-48 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Event preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                      type="button"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Subir Imagen
                    </Button>
                    {image && (
                      <Button
                        onClick={handleRemoveImage}
                        variant="outline"
                        type="button"
                      >
                        Remover
                      </Button>
                    )}
                    <p className="text-sm text-gray-500">
                      Requerimientos:
                      <br />
                      1. Mínimo 1200px
                      <br />
                      2. Max 2MB
                    </p>
                  </div>
                </div>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-name">Nombre del Evento</Label>
                <Input
                  id="event-name"
                  name="name"
                  value={eventData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description">
                  Descripción del Evento
                </Label>
                <Textarea
                  id="event-description"
                  name="description"
                  value={eventData.description}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-start">Fecha y Hora del Evento</Label>
                  <Input
                    id="event-start"
                    name="startDate"
                    value={eventData.startDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-end">Hasta</Label>
                  <Input
                    id="event-end"
                    name="endDate"
                    value={eventData.endDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location">Ubicación del Evento</Label>
                <Input
                  id="event-location"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-capacity">
                  Capacidad Máxima del Evento
                </Label>
                <Input
                  id="event-capacity"
                  name="capacity"
                  value={eventData.capacity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="adults-only"
                  checked={eventData.isAdultsOnly}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="adults-only">Evento para Mayores de Edad</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-age">Edad Mínima</Label>
                <Input
                  id="min-age"
                  name="minAge"
                  value={eventData.minAge}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
            <Button>Confirmar Evento</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
