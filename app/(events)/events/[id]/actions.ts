"use server"

import db from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchEventByID(id: string) /*Promise<IEvent[] | null>*/ {
    try {
        // TODO fix
        const data = await db.query(events.selByID, id);
        if (data[0]) {
            return data[0] as IEvent[]; // returns a list, we need only the first? prolly maybe change this to prefix matching
        } else {
            return null;  // or throw new Error('Event not found') ?
        }
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
}

export {
    fetchEventByID
}
