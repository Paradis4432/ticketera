"use server"

import {qquery} from "@/app/db/db";
import {events} from "@/models/queries/events";
import {MercadoPagoConfig, Preference} from "mercadopago";
import {redirect} from "next/navigation";

async function fetchEventByID(id: number): Promise<IEvent[] | null> {
    try {
        return await qquery<IEvent>(events.selByID, [id])
    } catch (err) {
        console.error(err)
        return null;
    }
}



export {
    fetchEventByID,
}
