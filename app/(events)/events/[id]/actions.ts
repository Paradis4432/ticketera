"use server"

import {qquery} from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchEventByID(id: string): Promise<IEvent[]> {
    return await qquery<IEvent>(events.selByID, [id])
}

export {
    fetchEventByID
}
