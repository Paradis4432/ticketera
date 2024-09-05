import ProgressBar from "@/components/progress-bar/ProgressBar"
import SideBar from "@/components/sidebar/SideBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import { Switch } from "@/components/ui/switch"
import { Calendar, ImageIcon, Upload } from "lucide-react"
import React, { useState } from "react"

const BasicData = () => {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

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
    setImagePreview(null)
  }
  return (
    <div className="flex h-full bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Datos Básicos del Evento.
            </h2>

            <form className="space-y-6">
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
                        className="mx-2"
                      >
                        Remover
                      </Button>
                    )}
                    <p className="text-sm text-gray-500">
                      Requerimientos:
                      <br />
                      1. 350px x 230px
                      <br />
                      2. Max. 2MB
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
                  placeholder="Selva Fest - Tech & Cachengue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description">
                  Descripción del Evento
                </Label>
                <Textarea
                  id="event-description"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-start">Fecha y Hora del Evento</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="event-start" type="datetime-local" />
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-end">Hasta</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="event-end" type="datetime-local" />
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location">Ubicación del Evento</Label>
                <Input id="event-location" placeholder="Cali, Costa Salguro" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-capacity">
                  Capacidad Máxima del Evento
                </Label>
                <Input id="event-capacity" type="number" placeholder="2800" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="adults-only" />
                <Label htmlFor="adults-only">Evento para Mayores de Edad</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-age">Edad Mínima</Label>
                <Input id="min-age" type="number" placeholder="+21" />
              </div>

              <Button className="w-full">Confirmar</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default BasicData
