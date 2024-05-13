"use server"

import db from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchAllEvents() : Promise<IEvent[]>{
    const data = await db.query(events.selAll);
    return data[0] as IEvent[]
}

export {
    fetchAllEvents
}