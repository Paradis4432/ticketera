import Navbar from "@/components/navbar/Navbar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserIcon } from "lucide-react"

export default function ProfileForm() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh_-_84px)] bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
              <UserIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="h-11"
                  placeholder="Nombre..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  className="h-11"
                  placeholder="Apellido..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="h-11"
                type="email"
                placeholder="Correo Electronico..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
              <Input
                id="birthDate"
                className="h-11"
                placeholder="Fecha de nacimiento..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                className="h-11"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                Vestibulum faucibus odio vitae arcu auctor lectus
              </Label>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 h-11"
              type="submit"
            >
              Guardar Cambios
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
