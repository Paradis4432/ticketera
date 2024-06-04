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

async function createEvent(data: ICreateEvent, email: string | null | undefined) {
    const userId = await db.query(users.selUserId, [email]);
    const event = await db.query(events.insertEvent, [data.name, data.description, data.location, data.starting_date, 0]);
    console.log(userId.rows)
    console.log(userId.rows[0]) // TODO add user to database
    console.log(event)
    console.log(event.rows[0])
    await db.query(events.insertUserEvent, [userId.rows[0].user_id, event.rows[0].event_id]); // ERROR: Cannot read properties of undefined (reading 'user_id')
    // ERROR unused event_id, userEvent
    // mismatch case?
}

export {
    createEvent
}