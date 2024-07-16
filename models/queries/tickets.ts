/**
 * TODO:
 * NOTES: validator_id es el usuario con la camara escaneando codigos
 * user_id es el otro usuario con el codigo
 *
 * - buy ticket with ins into users_tickets
 *
 * after any of this operations:
 * - select by user_id and ticket_id -> if null ticket is invalid
 * else if used ticket is duplicated
 * ^ return the select, let front handle that
 * - user has perms to scan ticket -> sel * from events where event_id = ? return true if validators contains user_id
 * as atomic:
 * - validate ticket, set used to true
 * do: insert into validations with ticket id and state, join events to get name?
 *
 * - get ser validations -> return validations where validator_id = ? para historial
 *
 */
import {qquery} from "@/app/db/db";
import {buyTicketSchema} from "@/models/dtos/tickets";
import { z } from 'zod';

export const createTickets = {
    buyTicket: async (data: z.infer<typeof buyTicketSchema>): Promise<UsersTickets> => {
        const { userId, stageId, notes } = data;
        const result = await qquery<UsersTickets>(
            `insert into users_tickets (user_id, stage_id, notes) values ($1, $2, $3) returning *;`,
            [userId, stageId, notes]
        );
        return result[0];
    }
};


export const readTickets = {
    byEmail: async (email: string) => {
        return await qquery<UsersTickets>(
            `select *
             from users_tickets ut
             join users u on u.user_id = ut.user_id
             where u.email = $1;`, [email]
        );
    },
    byUserId: async (userId: number) => {
        return await qquery<UsersTickets>(
            `select *
             from users_tickets ut
             join users u on u.user_id = ut.user_id
             where u.user_id = $1;`, [userId]
        );
    },
    getTicketByUserIdAndTicketId: async (userId: number, ticketId: number): Promise<UsersTickets | null> => {
        const result = await qquery<UsersTickets>(
            `select * from users_tickets where user_id = $1 and ticket_id = $2;`,
            [userId, ticketId]
        );
        return result.length > 0 ? result[0] : null;
    },
    getEventIdByTicketId: async (ticketId: number): Promise<number | null> => {
        const result = await qquery<{ event_id: number }>(
            `select es.event_id
             from users_tickets ut
             join events_stages es on ut.stage_id = es.event_stage_id
             where ut.ticket_id = $1;`,
            [ticketId]
        );
        return result.length > 0 ? result[0].event_id : null;
    }
};


export const validateTickets = {
    userHasPermsToScanTicket: async (eventId: number, userId: number): Promise<boolean> => {
        const result = await qquery<{ exists: boolean }>(
            `select exists(select 1 from events where event_id = $1 and $2 = any(validators));`,
            [eventId, userId]
        );
        return result[0]?.exists ?? false;
    },
    validateTicket: async (ticketId: number, validatorId: number, userId: number): Promise<{ status: string, ticket?: UsersTickets }> => {
        const ticket = await readTickets.getTicketByUserIdAndTicketId(userId, ticketId);
        if (!ticket) {
            return { status: "invalid" }; // Ticket is invalid
        }
        if (ticket.used) {
            return { status: "duplicated", ticket }; // Ticket is duplicated
        }

        // get eventId
        const eventId = await readTickets.getEventIdByTicketId(ticketId);
        if (!eventId) {
            throw new Error("Event ID not found for the given ticket");
        }

        // permissions verification
        const hasPerms = await validateTickets.userHasPermsToScanTicket(eventId, validatorId);
        if (!hasPerms) {
            throw new Error("User does not have permissions to scan this ticket");
        }

        // validate ticket
        await qquery(
            `update users_tickets set used = true where ticket_id = $1;`,
            [ticketId]
        );

        // insert validations
        await qquery<Validations>(
            `insert into validations (validator_id, user_id, ticket_id, state, name) 
             select $1, user_id, $2, 'VALIDATED', e.name 
             from users_tickets ut 
             join events_stages es on ut.stage_id = es.event_stage_id
             join events e on es.event_id = e.event_id
             where ut.ticket_id = $2
             returning *;`,
            [validatorId, ticketId]
        );
        return { status: "validated", ticket };
    },
    getUserValidations: async (validatorId: number): Promise<Validations[]> => {
        return await qquery<Validations>(
            `select * from validations where validator_id = $1;`,
            [validatorId]
        );
    }
};