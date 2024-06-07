"use server"

import db from "@/app/db/db";
import {users} from "@/models/queries/users";
import {events} from "@/models/queries/events";

async function getUserEvent(email: string | null | undefined): Promise<IEvent[]> {
    if (!email) return []
    const userId = await db.query(users.selUserId, [email]);
    const data = await db.query(users.selUserEvents, [userId.rows[0].user_id]);
    console.log(data.rows)
    return data.rows as IEvent[]
}


async function getUserId(email: string | null | undefined): Promise<number> {
    const userId = await db.query(users.selUserId, [email]);
    return userId.rows[0].user_id
}

async function getUserTickets(email: string | null | undefined): Promise<ITicket[]> {
    const data = await db.query(users.selUserTickets, [email]);
    return data.rows as ITicket[]
}

async function deleteUserEvent(eventId: number) {
    await db.query(events.deleteEvent, [eventId]);
}


export {
    getUserEvent,
    getUserTickets,
    deleteUserEvent,
    getUserId
}