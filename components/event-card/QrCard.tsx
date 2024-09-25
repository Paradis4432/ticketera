import { QRCodeSVG } from "qrcode.react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import { DialogClose } from "@/components/ui/dialog"

export default function QrCard() {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-none border-0">
      <CardContent className="p-6 flex flex-col items-center space-y-4">
        <QRCodeSVG value="https://example.com" size={200} />
        <div className="text-center space-y-2">
          <h2 className="font-semibold text-lg">
            Etiam Nulla Lectus Amet Nunc
          </h2>
          <p className="text-sm text-muted-foreground">
            Molestie At Vulputate.
          </p>
          <div className="flex items-center justify-center text-sm text-muted-foreground space-x-1">
            <CalendarIcon className="w-4 h-4" />
            <span>08 De Junio 2024 A Las 23:55</span>
          </div>
          <div className="flex items-center justify-center text-sm text-muted-foreground space-x-1">
            <MapPinIcon className="w-4 h-4" />
            <span>Cala, Costa Salguero</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <DialogClose className="w-full">
          <Button className="w-full" variant="default">
            Cerrar
          </Button>
        </DialogClose>
      </CardFooter>
    </Card>
  )
}
