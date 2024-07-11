"use server"

import {readEvents} from "@/models/queries/events";

async function getRandomEvents() {
    let x = await readEvents.readByID(8);

    console.log(x)
    //return await readEvents.readByID(8);
    return x;
}

export {
    getRandomEvents
}