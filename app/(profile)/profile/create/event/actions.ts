"use server"

import db from "@/app/db/db";
import {events} from "@/models/queries/events";

import { z } from "zod";
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
    const event_id = event.rows[0].event_id;
    const userEvent = await db.query(events.insertUserEvent, [userId.rows[0].user_id, event.rows[0].event_id]);

}

export {
    createEvent
}