"use server"

import db from "@/app/db/db";
import {users} from "@/models/queries/users";

async function getUserTickets(email: string | null | undefined): Promise<ITickets[]> {
    if (!email) return []
    const data = await db.query(users.selUserTickets, email);
    return data[0] as ITickets[]
}

export {
    getUserTickets
}