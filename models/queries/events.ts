/*
export enum events {
    selAll = `
        select *
        from events
        limit 10;
    `,
    readByID = "select * from events where event_id = $1;",
    insertEvent = "insert into events (name, description, location, starting_date, state) values ($1, $2, $3, $4, $5) RETURNING event_id;",
    insertUserEvent = "insert into user_event (user_id, event_id) values ($1, $2);",
    deleteEvent = "delete from events where event_id = $1;",
    isFound = "select * from users where user_id = ?;",
    //create = "insert into users (name, email, sex) values (?,?,?);",
    create = "insert into myevents (name, description, location, starting_date, state) values (?, 'desc', 'loc', '10-10-10', 0);",
    updateNameById = "update myevents set name = ? where event_id = ?;",
}
*/


import {qquery} from "@/app/db/db";

// USE CRUD DESIGN  create, read, update and delete.

export const createEvents = {}

export const readEvents = {
    read: async (limit: number) => {
        return await qquery<Events>(
            `select *
             from events
             limit $1;`, [limit])
    },
    readByID: async (id: number) => {
        return await qquery<Events>(
            `select *
             from events
             where event_id = $1`, [id])
    },
    readEventStagesByEventID: async (id: number) => {
        return await qquery<(Events & EventsStages)>(
            `select *
             from events_stages es
                      join events e on e.event_id = es.event_id
             where e.event_id = $1`, [id])
    }
}

export const updateEvents = {}

export const deleteEvents = {}