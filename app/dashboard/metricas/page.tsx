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
} from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
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

interface RRPPUser {
  name: string
  ticketsSold: number
  revenue: string
}

export default function Metrics() {
  const stats = [
    { title: "Entradas vendidas", value: 411 },
    { title: "Early Bird - Sell", value: 121 },
    { title: "Stage 1 - Sell", value: 100 },
    { title: "Stage 2 - Sell", value: 30 },
    { title: "Vip Stage 2 - Sell", value: 22 },
    { title: "Entradas Disponibles", value: 1352 },
    { title: "Early Bird - Stock", value: 0 },
    { title: "Stage 1 - Stock", value: 0 },
    { title: "Stage 2 - Stock", value: 1300 },
    { title: "Vip Stage 2 - Stock", value: 52 },
    { title: "Ingresos Totales", value: "$4.11M" },
    { title: "Early Bird - Ingreso", value: "$1.0M" },
    { title: "Stage 1 - Ingreso", value: "$210k" },
    { title: "Stage 2 - Ingreso", value: "$101.5k" },
    { title: "Vip Stage 2 - Ingreso", value: "$305k" },
  ]

  const topRRPPs: RRPPUser[] = Array(8).fill({
    name: "Jonathan Guidi",
    ticketsSold: 384,
    revenue: "$102,500",
  })

  return (
    <div className="flex h-screen bg-gray-100 ml-64">
      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Todos tus Eventos.</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Top Usuarios RRPPs</h2>
        <Table className="shadow-xl border boder-border">
          <TableHeader className="bg-black">
            <TableRow>
              <TableHead className="text-white">Nombre del Usuario</TableHead>
              <TableHead className="text-right text-white">
                Entradas Vendidas
              </TableHead>
              <TableHead className="text-right text-white">
                Facturación
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {topRRPPs.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
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
