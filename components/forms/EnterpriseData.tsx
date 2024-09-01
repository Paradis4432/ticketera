"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Palmtree, Upload, X } from "lucide-react"

export default function EnterpriseData() {
  const [companyName, setCompanyName] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCompanyName(e.target.value)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted", { companyName, image })
  }

  return (
    <div className="flex min-h-screen bg-gray-50 items-center justify-center p-4">
      <Card className="w-full max-w-xl p-3">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Palmtree className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold">
            Bienvenido a Selva Tickets
          </CardTitle>
          <CardDescription>
            Por favor completa el siguiente formulario con datos de tu empresa.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-upload" className="block">
                {imagePreview ? (
                  <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">
                      Subir imagen
                    </span>
                  </div>
                )}
              </Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {!imagePreview && (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                >
                  Subir imagen
                </Button>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-name">Nombre de la Productora</Label>
              <Input
                id="company-name"
                placeholder="Selva Producciones"
                value={companyName}
                onChange={handleCompanyNameChange}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-black"
            type="submit"
            onClick={handleSubmit}
          >
            Confirmar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
