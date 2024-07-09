"use server"

import {readEvents} from "@/models/queries/events";

async function getRandomEvents() {
    let x = await readEvents.readEventStages(8);
    console.log(x)
    return x;
}

export {
    getRandomEvents
}