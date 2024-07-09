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

// USE CRUD DESIGN

export const readEvents = {
    read50: async () => {
        return await qquery<
            {
                name: string
            }[]
        >(`select *
           from events
           limit 50;`)
    },
    readId: async (id?: number) => {
        return await qquery<
            IEvent & {
            nameasd: string
        }
        >(`select *
           from events
           where event_id = $1`, [id == null ? 0 : id])
    },
    readEventStages: async (id: number) => {
        return await qquery<
            (events_stages &
            events)[]>(`select *
                     from events_stages es
                              join events e on e.event_id = es.event_id
                     where e.event_id = $1`, [id])
    }
}

export const updateEvents = {}