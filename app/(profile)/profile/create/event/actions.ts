"use server"

import db from "@/app/db/db";
import {events} from "@/models/queries/events";
import {users} from "@/models/queries/users";


interface ICreateEvent {
    name: string;
    description: string;
    location: string;
    starting_date: string;

}

async function createEvent(data: ICreateEvent, email: string | null | undefined): Promise<IEvent> {
    const userId = await db.query(users.selUserId, [email]);
    const event = await db.query(events.insertEvent, [data.name, data.description, data.location, data.starting_date, 0]);
    await db.query(events.insertUserEvent, [userId.rows[0].user_id, event.rows[0].event_id]);
    await db.query(events.insertMetric, [event.rows[0].event_id]);
    await db.query(events.insertTicket, [event.rows[0].event_id, userId.rows[0].user_id])
    await db.query(events.insertMetricSale, [event.rows[0].event_id, event.rows[0].event_id])
    await db.query(events.insertMetricUser, [event.rows[0].event_id])
    return event.rows[0] as IEvent;
}

export {
    createEvent
}