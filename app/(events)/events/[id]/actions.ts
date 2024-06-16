"use server"

import db from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchEventByID(id: string):Promise<IEvent>{
    const data = await db.query(events.selByID, [id]);
    return data.rows[0] as IEvent
}

export {
    fetchEventByID
}
