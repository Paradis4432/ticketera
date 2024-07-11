"use server"

import {readEvents} from "@/models/queries/events";

async function getRandomEvents() {
    //let x = await readEvents.readEventStagesByEventID(8);
    return await readEvents.read(50);
}

export {
    getRandomEvents
}