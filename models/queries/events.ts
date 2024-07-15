/**
 * TODO:
 *
 * la funcion para conseguir una fecha random no funciona: NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
 * arreglar y actualizar todos los eventos para tener fechas reales
 *
 * - delete event by id [x]
 * - update event by id, pedir todos los datos y hacer update, si es igual al viejo no cambia nada, ZOD para argumentos
 * - active events by user id, where event_end_date < now?
 *
 * - sel top events by price
 * select *
 * from events e
 *          join (select distinct on (es.event_id) *
 *                from events_stages es
 *                order by es.event_id) es on es.event_id = e.event_id
 * order by es.price;
 *
 * - sel events by name
 * - sel producers of events
 * select p.*
 * from events e
 *          join producers p on p.producer_id = any (e.rrpps)
 * where event_id = 2;
 *
 * - get all info of event
 * select *
 * from events_stages es
 *          join events e on e.event_id = es.event_id
 *          join producers p on p.producer_id = any (e.rrpps)
 * where e.event_id = 2;
 *
 * - get user tickets by email | id
 * select *
 * from users_tickets ut
 * join users u on u.user_id = ut.user_id
 * where u.email = 'random7061@gmail.com'; | TODO add id as well
 *
 * - create | update event
 * - create | update stage
 *
 *
 * - sel events by date or order by date ?? PENDING
 */


import {qquery} from "@/app/db/db";

// [x] USE CRUD DESIGN  create, read, update and delete.

//returning avoid a second query to get the inserted row
export const createEvents = {
    create: async (event: CreateEvent): Promise<Events> => {
        const {
            rrpps,
            validators,
            name,
            description,
            location,
            max_capacity,
            min_age = 18, // by default?
            cbu,
            event_start_date,
            event_end_date
        } = event;

        const result = await qquery<Events>(
            `insert into events (
                rrpps,
                validators,
                name,
                description,
                location,
                max_capacity,
                min_age,
                cbu,
                event_start_date,
                event_end_date
            ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            returning *;`,
            [
                rrpps,
                validators,
                name,
                description,
                location,
                max_capacity,
                min_age,
                cbu,
                event_start_date,
                event_end_date
            ]
        );

        return result[0];
    }
};

export const readEvents = {
    read: async (limit: number) => {
        return await qquery<Events>(
            `select *
             from events
             limit $1;`, [limit])
    },
    byID: async (id: number) => {
        return await qquery<Events>(
            `select *
             from events
             where event_id = $1`, [id])
    },
    eventStagesByID: async (id: number) => {
        return await qquery<EventsStages>(
            `select *
             from events_stages
             where event_id = $1`, [id])
    },
    eventStagesWithEventByID: async (id: number) => {
        return await qquery<(Events & EventsStages)>(
            `select *
             from events_stages es
                      join events e on e.event_id = es.event_id
             where e.event_id = $1`, [id])
    }
}
//coalesce to avoid null values
export const updateEvents = {
    updateById: async (event: UpdateEvent): Promise<Events> => {
        const {
            event_id,
            rrpps,
            validators,
            name,
            description,
            location,
            max_capacity,
            min_age,
            cbu,
            event_start_date,
            event_end_date
        } = event;
        const result = await qquery<Events>(
            `update events set
                rrpps = coalesce($1, rrpps),
                validators = coalesce($2, validators),
                name = coalesce($3, name),
                description = coalesce($4, description),
                location = coalesce($5, location),
                max_capacity = coalesce($6, max_capacity),
                min_age = coalesce($7, min_age),
                cbu = coalesce($8, cbu),
                event_start_date = coalesce($9, event_start_date),
                event_end_date = coalesce($10, event_end_date)
            where event_id = $11
            returning *;`,
            [
                rrpps,
                validators,
                name,
                description,
                location,
                max_capacity,
                min_age,
                cbu,
                event_start_date,
                event_end_date,
                event_id
            ]
        );

        return result[0];
    }
};

export const deleteEvents = {
    deleteById: async (event_id: number): Promise<{ success: boolean }> => {
        await qquery(
            `DELETE FROM events
             WHERE event_id = $1;`,
            [event_id]
        );

        return { success: true };
    }
};