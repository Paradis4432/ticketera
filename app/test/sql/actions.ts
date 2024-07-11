"use server"

import {readEvents} from "@/models/queries/events";

async function getRandomEvents() {
    //let x = await readEvents.readEventStages(8);
    return await readEvents.readEventStages(8);
}

export {
    getRandomEvents
}