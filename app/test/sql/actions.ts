"use server"

import {readEvents} from "@/models/queries/events";

async function getRandomEvents() {
    let x = await readEvents.readEventStagesByEventID(8);

    x.map(e => {
        e.

    });


    console.log(x)
    //return await readEvents.readByID(8);
    return x;
}

export {
    getRandomEvents
}