import {NextRequest, NextResponse} from "next/server";
import {MercadoPagoConfig, Preference} from "mercadopago";

interface Item {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
}

interface RequestBody {
    id: string;
    title: string;
    quantity: string;
    price: string;
}

const access_token = process.env.MERCADO_PAGO_ACCESS_TOKEN;

if (!access_token) {
    throw new Error("Missing MERCADO_PAGO_ACCESS_TOKEN environment variable");
}

const client = new MercadoPagoConfig({
    accessToken: access_token,
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as RequestBody;

        if (!body.title || !body.quantity || !body.price) {
            return NextResponse.json({
                status: 400,
                message: "Bad Request: Missing required fields"
            });
        }

        const preferenceBody = {
            items: [
                {
                    id: body.id,
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
