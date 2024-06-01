import {revalidatePath} from "next/cache";
import db from "@/app/db/db";
import {events} from "@/models/queries/events";

async function fetchAllEvents(): Promise<IEvent[]> {
    const data = await db.query(events.selAll);
    return data.rows as IEvent[];
}