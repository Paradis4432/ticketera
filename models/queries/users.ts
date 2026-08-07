/**
 * TODO:
 *
 * - is user created [x]
 * - is user producer [x]
 * - TODO pull request with fav_rrpps, fav_validators null ref to users.id and fav_partner null ref to producers.id
 * - create | update | delete | select user RRPP for producer based on producer.id, ZOD
 * - create | update | delete | select user validator for producer based on producer.id, ZOD
 * - create | update | delete | select user partner for producer based on producer.id, ZOD
 *
 */
import { z } from 'zod';
import {qquery} from "@/app/db/db";
import {
    deleteUserProducerRelationSchema,
    updateUserProducerSchema,
    userEventRelationSchema,
    userProducerSchema
} from "@/models/dtos/users";



export const createUser = {
    rrpp: async (data: z.infer<typeof userEventRelationSchema>) => {
        userEventRelationSchema.parse(data);
        const { userId, eventId } = data;

        const result = await qquery(
            `update events set rrpps = array_append(rrpps, $1) where event_id = $2 returning *;`,
            [userId, eventId]
        );
        return result[0];
    },
    validator: async (data: z.infer<typeof userEventRelationSchema>) => {
        userEventRelationSchema.parse(data);
        const { userId, eventId } = data;

        const result = await qquery(
            `update events set validators = array_append(validators, $1) where event_id = $2 returning *;`,
            [userId, eventId]
        );
        return result[0];
    },
    partner: async (data: Producers) => {

        const { name, display_name, email } = data;

        const result = await qquery(
            `insert into producers (name, display_name, email) values ($1, $2, $3) returning *;`,
            [name, display_name, email]
        );
        return result[0];
    },
};


export const readUser = {
    rrppByEventId: async (eventId: number) => {
        return await qquery(
            `select rrpps from events where event_id = $1;`,
            [eventId]
        );
    },
    validatorByEventId: async (eventId: number) => {
        return await qquery(
            `select validators from events where event_id = $1;`,
            [eventId]
        );
    },
    partnerByProducerId: async (producerId: number) => {
        return await qquery(
            `select * from producers where producer_id = $1;`,
            [producerId]
        );
    },
    isUserCreated: async (userId: number): Promise<boolean> => {
        const result = await qquery<{ exists: boolean }>(
            `select exists(select 1 from users where user_id = $1);`, [userId]
        );
        return result[0]?.exists ?? false;
    },
    isUserProducer: async (userId: number): Promise<boolean> => {
        const result = await qquery<{ exists: boolean }>(
            `select exists(select 1 from producers where user_id = $1);`, [userId]
        );
        return result[0]?.exists ?? false;
    }
};


export const deleteUser = {
    rrpp: async (data: z.infer<typeof deleteUserProducerRelationSchema>) => {
        deleteUserProducerRelationSchema.parse(data);
        const { userId, producerId } = data;

        const result = await qquery(
            `update events set rrpps = array_remove(rrpps, $1) where event_id = $2 returning *;`,
            [userId, producerId]
        );
        return { success: true };
    },
    validator: async (data: z.infer<typeof deleteUserProducerRelationSchema>) => {
        deleteUserProducerRelationSchema.parse(data);
        const { userId, producerId } = data;

        const result = await qquery(
            `update events set validators = array_remove(validators, $1) where event_id = $2 returning *;`,
            [userId, producerId]
        );
        return { success: true };
    },
    partner: async (data: z.infer<typeof deleteUserProducerRelationSchema>) => {
        deleteUserProducerRelationSchema.parse(data);
        const { producerId } = data;

        const result = await qquery(
            `delete from producers where producer_id = $1 returning *;`,
            [producerId]
        );
        return { success: true };
    },
};


export const updateUser = {
    rrpp: async (data: z.infer<typeof userEventRelationSchema>) => {
        userEventRelationSchema.parse(data);
        const { userId, eventId } = data;

        // Assuming the update logic involves some change to the user or event relation
        const result = await qquery(
            `update events set rrpps = array_replace(rrpps, $1, $1) where event_id = $2 returning *;`,
            [userId, eventId]
        );
        return result[0];
    },
    validator: async (data: z.infer<typeof userEventRelationSchema>) => {
        userEventRelationSchema.parse(data);
        const { userId, eventId } = data;

        // Assuming the update logic involves some change to the user or event relation
        const result = await qquery(
            `update events set validators = array_replace(validators, $1, $1) where event_id = $2 returning *;`,
            [userId, eventId]
        );
        return result[0];
    },
    partner: async (data: z.infer<typeof updateUserProducerSchema>) => {
        updateUserProducerSchema.parse(data);
        const { producerId, name, displayName, email } = data;

        const result = await qquery(
            `update producers set 
                name = coalesce($2, name), 
                display_name = coalesce($3, display_name), 
                email = coalesce($4, email) 
             where producer_id = $1 
             returning *;`,
            [producerId, name, displayName, email]
        );
        return result[0];
    },
};



export enum users {
    //selUserTicket = "select * from ticket as t join event as e join user as u where user_id = ? and e.event_id = t.event_id;"
    /*selUserEvents=`
        select
            e.name as event_name,
            e.event_id as event_id,
            e.description,
            e.location,
            e.starting_date,
            e.state
        from
            user u
        join
            user_event ue on u.user_id = ue.user_id
        join
            event e on ue.event_id = e.event_id
        where
            u.email = ?;
    `,
*/
    selUserId = `select user_id
                 from users
                 where email = $1`,
    selUserEvents = `
        select e.*
        from events e
                 join user_event ue on e.event_id = ue.event_id
        where ue.user_id = $1
    `,

    saveUser = `
        insert into users (email, name)
        values ($1, $2)
        on conflict do nothing
    `,


    /*    selUserTickets = `
            select e.name     as event_name,
                   e.event_id as event_id,
                   t.name     as ticket_name,
                   t.uses,
                   t.max_uses,
                   t.price,
                   t.reason,
                   t.creation_date,
                   t.expiration_date
            from user u
                     join
                 ticket t on u.user_id = t.user_id
                     join
                 event e on t.event_id = e.event_id
            where u.email = 'facumartinezvidal@gmail.com';
        `,*/
    selUserTickets = `
        select t.*
        from tickets t
                 join users u on t.user_id = u.user_id
        where u.email = $1
    `,
    selUserData = `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id
        where user_id = $1
          and ticket_id = $2
    `,
    selTicketDataByID = `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id
        where user_id = ?
          and ticket_id = ?
    `,
    selAllUserTickets = `
        select t.*
        from tickets t
        where user_id = ?
    `,
    // tecnicamente esto no hace falta
    selTicketEventById = `
        select t.*, e.*
        from tickets t
                 join events e on t.event_id = e.event_id and e.event_id = ?
        where user_id = ?
          and ticket_id = ?

    `

}
