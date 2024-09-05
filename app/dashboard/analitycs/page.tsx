import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Home,
  Ticket,
  Users,
  CreditCard,
  UserCircle,
  LogOut,
  ChevronDown,
} from "lucide-react"

interface StatCardProps {
  title: string
  value: string
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}

interface Event {
  name: string
  ticketsSold: number
  revenue: string
}

interface RRPPUser {
  name: string
  event: string
  ticketsSold: number
  revenue: string
}

export default function Analitycs() {
  const stats = [
    { title: "Ingresos Totales", value: "$11.4M" },
    { title: "Ingresos de Eventos Activos", value: "$2.95M" },
    { title: "Ingresos del Último Mes", value: "$2.5M" },
    { title: "Record Facturación Mensual", value: "$3.81M" },
  ]

  const topEvents: Event[] = Array(8).fill({
    name: "EventName",
    ticketsSold: 8384,
    revenue: "$10,002,500",
  })

  const topRRPPs: RRPPUser[] = Array(9).fill({
    name: "Jonathan Guidi",
    event: "EventName",
    ticketsSold: 439,
    revenue: "$102,500",
  })

  return (
    <div className="flex h-screen bg-gray-100 ml-64">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Todos tus Eventos.</h1>
        <div className="flex-1 h-[1px] bg-black/10 mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Top Historial de Eventos.
        </h2>
        <Table className="">
          <TableHeader className="">
            <TableRow className="bg-black text-white hover:bg-black hover:bg-opacity-100">
              <TableHead className="flex items-center text-white">
                Nombre del Evento <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead className="text-right text-white">
                Entradas Vendidas
              </TableHead>
              <TableHead className="text-right text-white">
                Facturación
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white border border-border">
            {topEvents.map((event, index) => (
              <TableRow className="h-12" key={index}>
                <TableCell>{event.name}</TableCell>
                <TableCell className="text-right">
                  {event.ticketsSold}
                </TableCell>
                <TableCell className="text-right">{event.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Top Usuarios RRPPs.
        </h2>
        <Table>
          <TableHeader className="">
            <TableRow className="bg-black text-white hover:bg-black hover:bg-opacity-100">
              <TableHead className="flex items-center text-white">
                Nombre del Usuario <ChevronDown className="ml-2 h-4 w-4" />
              </TableHead>
              <TableHead>Evento + Vendido</TableHead>
              <TableHead className="text-right text-white">
                Entradas Vendidas
              </TableHead>
              <TableHead className="text-right text-white">
                Facturación
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white border border-border">
            {topRRPPs.map((user, index) => (
              <TableRow className="h-12" key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.event}</TableCell>
                <TableCell className="text-right">{user.ticketsSold}</TableCell>
                <TableCell className="text-right">{user.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
