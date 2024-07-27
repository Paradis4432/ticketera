"use server"
import { z} from 'zod';
import { parse } from 'csv-parse/sync';
import { readEvents } from "@/models/queries/events";
import { readUser } from "@/models/queries/users";
import { createTickets } from "@/models/queries/tickets";

const csvRowSchema = z.object({
    EventName: z.string(),
    StageName: z.string(),
    userId: z.number().positive(),
    TicketQuantity: z.string().transform(Number).pipe(z.number().positive()),
    Notes: z.array(z.string())
});

export async function processCSV(csvContent: string) {
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
                const events = await readEvents.byName(validatedRow.EventName);
                if (!events || events.length === 0 || !events[0].event_id) {
                    throw new Error(`El evento "${validatedRow.EventName}" no existe o no tiene un ID válido`);
                }
                const eventId = events[0].event_id;

                // Buscar si el stage existe
                const stages = await readEvents.eventStagesByID(eventId);
                if (!stages || stages.length === 0) {
                    throw new Error(`No se encontraron stages para el evento "${validatedRow.EventName}"`);
                }
                const stage = stages.find(s => s.name === validatedRow.StageName);
                if (!stage || typeof stage.event_stage_id === 'undefined') {
                    throw new Error(`El stage "${validatedRow.StageName}" no existe o no tiene un ID válido para el evento "${validatedRow.EventName}"`);
                }

                // Buscar el usuario por id
                const users = await readUser.userById(validatedRow.userId);
                if (!users || users.length === 0 || !users[0].user_id) {
                    throw new Error(`No se encontró un usuario válido con el id "${validatedRow.userId}"`);
                }
                const userId = users[0].user_id;

                // Crear los tickets
                for (let i = 0; i < validatedRow.TicketQuantity; i++) {
                    await createTickets.buyTicket({
                        user_id: userId,
                        stage_id: stage.event_stage_id,
                        notes: validatedRow.Notes
                    });
                }

                results.success.push(`Fila ${index + 1}: ${validatedRow.TicketQuantity} tickets creados para el usuario con ID ${validatedRow.userId}`);
            } catch (error) {
                results.errors.push(`Error en la fila ${index + 1}: ${error instanceof Error ? error.message : String(error)}`);
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
            details: { errors: [error instanceof Error ? error.message : String(error)] }
        };
    }
}