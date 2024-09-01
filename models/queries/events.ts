/**
 * TODO:
 *
 * la funcion para conseguir una fecha random no funciona: NOW() + INTERVAL '1 day' * floor(random() * 5 + 1),
 * arreglar y actualizar todos los eventos para tener fechas reales
 *
 * - delete event by id
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

import { qquery } from "@/lib/db/db"

// USE CRUD DESIGN  create, read, update and delete.

export const createEvents = {}

export const readEvents = {
  read: async (limit: number) => {
    return await qquery<Events>(
      `select *
             from events
             limit $1;`,
      [limit]
    )
  },
  byID: async (id: number) => {
    return await qquery<Events>(
      `select *
             from events
             where event_id = $1`,
      [id]
    )
  },
  eventStagesByID: async (id: number) => {
    return await qquery<EventsStages>(
      `select *
             from events_stages
             where event_id = $1`,
      [id]
    )
  },
  eventStagesWithEventByID: async (id: number) => {
    return await qquery<Events & EventsStages>(
      `select *
             from events_stages es
                      join events e on e.event_id = es.event_id
             where e.event_id = $1`,
      [id]
    )
  },
}

export const updateEvents = {}

export const deleteEvents = {}
