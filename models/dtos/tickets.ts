import { z } from 'zod';

export const buyTicketSchema = z.object({
    userId: z.number(),
    stageId: z.number(),
    notes: z.array(z.string()).optional(),
});