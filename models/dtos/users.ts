import { z } from 'zod';

export const userEventRelationSchema = z.object({
    userId: z.number(),
    eventId: z.number(),
});

export const userProducerSchema = z.object({
    name: z.string(),
    displayName: z.string(),
    email: z.string().email(),
});

export const updateUserProducerSchema = z.object({
    producerId: z.number(),
    name: z.string().optional(),
    displayName: z.string().optional(),
    email: z.string().email().optional(),
});

export const deleteUserProducerRelationSchema = z.object({
    userId: z.number(),
    producerId: z.number(),
});