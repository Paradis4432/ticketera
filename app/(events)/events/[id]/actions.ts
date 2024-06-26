"use server"

import {qquery} from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchEventByID(id: number): Promise<IEvent[] | null> {
    try {
        return await qquery<IEvent>(events.selByID, [id])
    } catch (err) {
        console.error(err)
        return null;
    }
}

async function get(){
    return process.env.MERCADO_PAGO_PUBLIC_KEY
}


export {
    fetchEventByID,
    get
}
