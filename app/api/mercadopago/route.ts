import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Define la estructura de los ítems con todos los campos requeridos
interface Item {
    id: string; // Asegúrate de que cada ítem tenga un id
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
}

// Define la estructura del cuerpo de la solicitud
interface RequestBody {
    id:string;
    title: string;
    quantity: string;
    price: string;
}

const client = new MercadoPagoConfig({
    accessToken: "TEST-3771012168228704-061617-d902234cbeb3693d46c93d0a33b8aef8-469021861"
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as RequestBody; // Asegúrate de que el cuerpo de la solicitud sea de tipo RequestBody

        // Verifica que el cuerpo de la solicitud tenga las propiedades necesarias
        if (!body.title || !body.quantity || !body.price) {
            return NextResponse.json({
                status: 400,
                message: "Bad Request: Missing required fields"
            });
        }

        const preferenceBody = {
            items: [
                {
                    id: body.id, // Asigna un id único a cada ítem
                    title: body.title,
                    quantity: Number(body.quantity),
                    unit_price: Number(body.price),
                    currency_id: "ARS",
                }
            ],
            back_urls: {
                success: "http://localhost:3000",
                failure: "http://localhost:3000",
                pending: "http://localhost:3000",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body: preferenceBody });

        return NextResponse.json({
            status: 200,
            id: result.id,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
