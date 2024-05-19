"use server"

import db from "@/app/db/db";
import {users} from "@/models/queries/users";

async function getUserEvent(email: string | null | undefined): Promise<IEvent[]> {
    if (!email) return []
    const data = await db.query(users.selUserEvents, email);
    return data[0] as IEvent[]
}

export {
    getUserEvent
}