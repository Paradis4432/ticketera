
import { z } from 'zod';
import { parse } from 'csv-parse/sync';
import {readEvents} from "@/models/queries/events";
import {readUser} from "@/models/queries/users";
import {createTickets} from "@/models/queries/tickets";

const csvRowSchema = z.object({
    EventName: z.string(),
    StageName: z.string(),
    userId: z.number().positive(),
    TicketQuantity: z.string().transform(Number).pipe(z.number().positive()),
    Notes: z.string().optional()
});

export async function processCSV(csvContent: string, validatorId: number) {
    const results = {
        success: [] as string[],
        errors: [] as string[]
    };

    try {
        const records = parse(csvContent, {
            columns: true,
            skip_empty_lines: true
        });

        for (const [index, record] of records.entries()) {
            try {
                const validatedRow = csvRowSchema.parse(record);

                // Buscar si el evento existe
                const event = await readEvents.byName(validatedRow.EventName);
                if (!event[0]) {
                    throw new Error(`El evento "${validatedRow.EventName}" no existe`);
                }

                // Buscar si el stage existe
                const stage = await readEvents.eventStagesByID(event[0].event_id);
                if (!stage) {
                    throw new Error(`El stage "${validatedRow.StageName}" no existe para el evento "${validatedRow.EventName}"`);
                }

                // Buscar el usuario por email
                const user = await readUser.userById(validatedRow.userId)
                if (!user) {
                    throw new Error(`No se encontró un usuario con el id "${validatedRow.userId}"`);
                }

                // Crear los tickets
                for (let i = 0; i < validatedRow.TicketQuantity; i++) {
                    const ticket = await createTickets.buyTicket({
                        userId: user.user_id,
                        stageId: stage[0].event_stage_id,
                        notes: validatedRow.Notes ? [validatedRow.Notes] : undefined
                    });
                }

                results.success.push(`Fila ${index + 1}: ${validatedRow.TicketQuantity} tickets creados para ${validatedRow.UserEmail}`);
            } catch (error) {
                results.errors.push(`Error en la fila ${index + 1}: ${error}`);
            }
        }

        return {
            success: results.errors.length === 0,
            message: 'Procesamiento de CSV completado',
            details: results
        };
    } catch (error) {
        console.error('Error al procesar el CSV:', error);
        return {
            success: false,
            message: 'Error al procesar el CSV',
            details: { errors: [error] }
        };
    }
}