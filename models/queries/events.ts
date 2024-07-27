/**
 * TODO:
 *
 * la funcion para conseguir una fecha random no funciona: NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
 * arreglar y actualizar todos los eventos para tener fechas reales
 *
 * - delete event by id [x]
 * - update event by id, pedir todos los datos y hacer update, si es igual al viejo no cambia nada, ZOD para argumentos [x]
 * - active events by user id, where event_end_date < now? [x]
 *
 * - sel top events by price [x]
 * select *
 * from events e
 *          join (select distinct on (es.event_id) *
 *                from events_stages es
 *                order by es.event_id) es on es.event_id = e.event_id
 * order by es.price;
 *
 * - sel events by name [x]
 * - sel producers of events [x]
 * select p.*
 * from events e
 *          join producers p on p.producer_id = any (e.rrpps)
 * where event_id = 2;
 *
 * - get all info of event [x]
 * select *
 * from events_stages es
 *          join events e on e.event_id = es.event_id
 *          join producers p on p.producer_id = any (e.rrpps)
 * where e.event_id = 2;
 *
 * // in tickets.ts
 * - get user tickets by email | id [x]
 * select *
 * from users_tickets ut
 * join users u on u.user_id = ut.user_id
 * where u.email = 'random7061@gmail.com'; | TODO add id as well
 *
 * - create | update event [x]
 * - create | update stage [x]
 *
 *
 * - sel events by date or order by date ?? PENDING [x] check
 */


import {qquery} from "@/app/db/db";
import { Events } from '../../app/utils/interfaces';
import { Pool } from 'pg';
import { z } from 'zod';
import {
    createEventSchema,
    createEventStageSchema,
    updateEventSchema,
    updateEventStageSchema
} from "@/models/dtos/events";
// [x] USE CRUD DESIGN  create, read, update and delete.

// returning avoid a second query to get the inserted row
export const createEvents = {
    create: async (event: z.infer<typeof createEventSchema>): Promise<Events> => {
        createEventSchema.parse(event);
        const {
            rrpps,
            validators,
            name,
            description,
            location,
            max_capacity,
            min_age = 18,
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

const pool = new Pool({
    host: 'ep-blue-dream-a4eevgmh-pooler.us-east-1.aws.neon.tech',
    user: 'default',
    password:'tiKHPT7mrXb6',
    database:'testing'
    })

export const readEvents = {
    read: async (limit: number): Promise<Event[]> => {
      const client = await pool.connect();
      try {
        const res = await client.query<Event>(
          `SELECT * FROM events LIMIT $1;`, [limit]
        );
        return res.rows;
      } finally {
        client.release();
      }
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
    },
    activeEvents: async () => {
        return await qquery<Events>(
            `select *
             from events
             where now() between event_start_date and event_end_date;`
        );
    },
    topEventsByPrice: async () => {
        return await qquery<Events>(
            `select *
             from events e
             join (
                 select distinct on (es.event_id) *
                 from events_stages es
                 order by es.event_id
             ) es on es.event_id = e.event_id
             order by es.price;`
        );
    },
    byName: async (name: string) => {
        return await qquery<Events>(
            `select *
             from events
             where name = $1;`, [name]
        );
    },
    producersOfEvent: async (event_id: number) => {
        return await qquery<Producers>(
            `select p.*
             from events e
                      join producers p on p.producer_id = any (e.rrpps)
             where event_id = $1;`, [event_id]
        );
    },
    byDate: async (date: string) => {
        return await qquery<Events>(
            `select *
             from events
             where $1 between event_start_date and event_end_date
             order by event_start_date;`, [date]
        );
    },
    orderByDate: async () => {
        return await qquery<Events>(
            `select *
             from events
             order by event_start_date;`
        );
    }
};

// coalesce to avoid null values
export const updateEvents = {
    updateById: async (event: z.infer<typeof updateEventSchema>): Promise<Events> => {
        updateEventSchema.parse(event);

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
            `delete from events
             where event_id = $1;`,
            [event_id]
        );
        return { success: true };
    },
};

export const createEventStage = {
    create: async (stage: z.infer<typeof createEventStageSchema>): Promise<EventsStages> => {
        createEventStageSchema.parse(stage);

        const {
            name,
            event_id,
            price,
            stock,
            event_stage_start_date,
            event_stage_end_date
        } = stage;

        const result = await qquery<EventsStages>(
            `insert into events_stages (
                name,
                event_id,
                price,
                stock,
                event_stage_start_date,
                event_stage_end_date
            ) values ($1, $2, $3, $4, $5, $6)
            returning *;`,
            [
                name,
                event_id,
                price,
                stock,
                event_stage_start_date,
                event_stage_end_date
            ]
        );

        return result[0];
    }
};

export const updateEventStage = {
    updateById: async (stage: z.infer<typeof updateEventStageSchema>): Promise<EventsStages> => {
        updateEventStageSchema.parse(stage);

        const {
            event_stage_id,
            name,
            event_id,
            price,
            stock,
            event_stage_start_date,
            event_stage_end_date
        } = stage;

        const result = await qquery<EventsStages>(
            `update events_stages set
                name = coalesce($1, name),
                event_id = coalesce($2, event_id),
                price = coalesce($3, price),
                stock = coalesce($4, stock),
                event_stage_start_date = coalesce($5, event_stage_start_date),
                event_stage_end_date = coalesce($6, event_stage_end_date)
            where event_stage_id = $7
            returning *;`,
            [
                name,
                event_id,
                price,
                stock,
                event_stage_start_date,
                event_stage_end_date,
                event_stage_id
            ]
        );

        return result[0];
    }
};