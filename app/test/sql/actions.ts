"use server"

import {readEvents} from "@/models/queries/events";
import {qquery} from "@/app/db/db";

async function getRandomEvents(): Promise<Events[]> {
    let y = await qquery<Events[]>(`INSERT INTO events_stages (name,
                                                               event_id,
                                                               price,
                                                               stock,
                                                               event_stage_start_date,
                                                               event_stage_end_date)
                                    VALUES ('test',
                                            3,
                                            2,
                                            2,
                                            '00000000',
                                            '2024-07-19 18:00:00');`)

    console.log("Y:")
    console.log(y)
    let x = await readEvents.read(50);
    return x;
}

export {
    getRandomEvents
}