"use server"
import {readEvents} from "@/models/queries/events";

async function fetchAllEvents() {
    /*    const data = await db.query(events.selAll);
        const d = data.rows as IEvent[];

        const data1 = await qquery<IEvent[]>(events.selAll);

        return data.rows as IEvent[];*/


    /*    let x = await qquery<IEvent[]>(events.selAll) as IEvent[];
        console.log("x")
        console.log(x)
        console.log(typeof x)
        return x as IEvent[];*/

    //return await readEvents.readId(2);

    //let x = await readEvents.read50();
    //return x[0];

    //return qquery<IEvent>(readEvents.read.all())
}

async function fetchTop10Events() {
    //return qquery<IEvent>(events.selAll)
}

export {
    fetchAllEvents,
    fetchTop10Events
}