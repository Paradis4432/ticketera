"use server"

import {events} from "@/models/queries/events";
import {qquery} from "@/app/db/db";


async function fetchAllEvents(): Promise<IEvent[]> {
    /*    const data = await db.query(events.selAll);
        const d = data.rows as IEvent[];

        const data1 = await qquery<IEvent[]>(events.selAll);

        return data.rows as IEvent[];*/


    /*    let x = await qquery<IEvent[]>(events.selAll) as IEvent[];
        console.log("x")
        console.log(x)
        console.log(typeof x)
        return x as IEvent[];*/

    return qquery<IEvent>(events.selAll)
}

async function fetchTop10Events(): Promise<IEvent[]> {
    return qquery<IEvent>(events.selAll)
}

export {
    fetchAllEvents,
    fetchTop10Events
}