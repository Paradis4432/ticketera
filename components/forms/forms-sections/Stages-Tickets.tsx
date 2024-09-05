import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Star, Zap } from "lucide-react"
import { useState } from "react"

interface Stage {
  id: number
  name: string
  startDate: string
  endDate: string
  price: number
  stock: number
}

export default function StagesDeTickets() {
  const [stages, setStages] = useState<Stage[]>([
    {
      id: 1,
      name: "Early Bird",
      startDate: "22/06/2024 - 23hrs",
      endDate: "23/06/2024 - 05hrs",
      price: 0,
      stock: 500,
    },
    {
      id: 2,
      name: "VIP - Stage 1",
      startDate: "22/06/2024 - 23hrs",
      endDate: "23/06/2024 - 05hrs",
      price: 0,
      stock: 500,
    },
    {
      id: 3,
      name: "Stage 1",
      startDate: "22/06/2024 - 23hrs",
      endDate: "23/06/2024 - 05hrs",
      price: 0,
      stock: 1000,
    },
    {
      id: 4,
      name: "Stage 2",
      startDate: "22/06/2024 - 23hrs",
      endDate: "23/06/2024 - 05hrs",
      price: 0,
      stock: 1500,
    },
  ])

  const [newStage, setNewStage] = useState<Stage>({
    id: 0,
    name: "",
    startDate: "",
    endDate: "",
    price: 0,
    stock: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewStage((prev) => ({ ...prev, [name]: value }))
  }

  const handleCreateStage = () => {
    setStages((prev) => [...prev, { ...newStage, id: prev.length + 1 }])
    setNewStage({
      id: 0,
      name: "",
      startDate: "",
      endDate: "",
      price: 0,
      stock: 0,
    })
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8">
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Stages de Tickets.</h2>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stage-name">Nombre del Stage</Label>
                <Input
                  id="stage-name"
                  name="name"
                  placeholder="Early Bird"
                  value={newStage.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stage-start">
                    Fecha de Inicio y Fin del Stage
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="stage-start"
                      name="startDate"
                      type="datetime-local"
                      value={newStage.startDate}
                      onChange={handleInputChange}
                    />
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage-end">Hasta</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="stage-end"
                      name="endDate"
                      type="datetime-local"
                      value={newStage.endDate}
                      onChange={handleInputChange}
                    />
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage-price">
                  Precio por Entrada del Stage
                </Label>
                <Input
                  id="stage-price"
                  name="price"
                  type="number"
                  placeholder="$14.000"
                  value={newStage.price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage-stock">Stock Disponible del Stage</Label>
                <Input
                  id="stage-stock"
                  name="stock"
                  type="number"
                  placeholder="550"
                  value={newStage.stock}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-gray-500">
                  Restan 1500 Tickets de tu Evento.
                </p>
              </div>

              <Button className="w-full" onClick={handleCreateStage}>
                Crear Stage
              </Button>
            </form>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mt-8 mb-4">Tus Stages Creados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stages.map((stage) => (
            <Card key={stage.id} className="bg-black text-white">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {stage.name === "Early Bird" ? (
                      <Star className="mr-2 h-4 w-4" />
                    ) : (
                      <Zap className="mr-2 h-4 w-4" />
                    )}
                    <h4 className="font-semibold">{stage.name}</h4>
                  </div>
                  <span className="text-sm">Stock Inicial: {stage.stock}</span>
                </div>
                <div className="text-sm mb-2">{stage.startDate}</div>
                <div className="text-sm">{stage.endDate}</div>
                <Button variant="destructive" className="mt-2 w-full">
                  Eliminar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-full my-6">Siguiente</Button>
      </main>
    </div>
  )
}
