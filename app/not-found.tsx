import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <AlertCircle className="w-20 h-20 text-red-500 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900">
          404 - Pagina no encontrada
        </h1>
        <p className="text-xl text-gray-600">
          La pagina que buscas no se encuentra disponible.
        </p>
        <Button asChild className="mt-4 h-11">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
