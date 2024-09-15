import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"

export default function EventDetails() {
  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <Button variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <div className="grid gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <picture className="size-48 rounded-md bg-blue-300"></picture>
            <div className="flex-grow max-h-48">
              <div className="flex justify-between flex-col gap-3 items-start">
                <div>
                  <Badge className="mr-2">Extra Tickets</Badge>
                  <Badge>Evento Profesional</Badge>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold">
                    Etiam Nulla Lectus Amet Nunc Molestie At Vulputate.
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>08 De Junio 2024 • 23:55 a 05:30</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Cali, Costa Sagrada, Buenos Aires</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Evento Para Mayores De Edad (+18M)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="space-y-4">
              {[
                { name: "Early Bird", price: "10.000", status: "SOLD OUT" },
                { name: "Stage 1", price: "15.000", status: "SOLD OUT" },
                { name: "Stage 2", price: "20.000", status: "Comprar Ticket" },
                {
                  name: "VIP - Stage 2",
                  price: "30.000",
                  status: "Comprar Tickets",
                },
              ].map((ticket, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        {ticket.status !== "SOLD OUT" && <div></div>}
                      </div>
                      <div>
                        <h3 className="font-semibold">{ticket.name}</h3>
                        <p className="text-sm text-gray-500">
                          Desde $ {ticket.price}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={
                        ticket.status === "SOLD OUT" ? "secondary" : "default"
                      }
                      disabled={ticket.status === "SOLD OUT"}
                    >
                      {ticket.status}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Al Valor Indicado, Se Sumará El Costo Por Servicio. En Caso De
              Reembolso, Dicho Costo No Será Reintegrado.
            </p>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Llega La 4ta Edición El Congreso De Destiladores
                </h2>
                <p className="text-gray-700 mb-4">
                  Argentinos Es El Primer Y Único Evento De Habla Hispana Del
                  Mundo Que Reúne En Un Solo Lugar Al Vasto Mundo De Los
                  Destilados Artesanales E Industriales.
                </p>
                <p className="text-gray-700 mb-4">
                  Esta Iniciativa, Que Surge En El Año 2021, Responde A La
                  Necesidad De Compartir Ideas, Novedades Y Buenas Prácticas
                  Entre Destiladores.
                </p>
                <div className="flex items-start mb-4">
                  <div></div>
                  <p className="text-gray-700">
                    La 4 Edición De C.D.A. Se Llevará A Cabo En Mendoza, Un
                    Cambio Significativo No Solo En Ubicación, Sino También Por
                    El Valioso Aporte De Esta Provincia Como Productora De
                    Materia Prima, Elaboración De Vermut Y Pionera En La
                    Destilación.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
