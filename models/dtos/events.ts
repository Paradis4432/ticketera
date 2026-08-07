import { z } from 'zod';

export const createEventSchema = z.object({
    rrpps: z.array(z.number()).nullable(),
    validators: z.array(z.number()).nullable(),
    name: z.string(),
    description: z.string().nullable(),
    location: z.string(),
    max_capacity: z.number(),
    min_age: z.number().default(18),
    cbu: z.string(),
    event_start_date: z.string(),
    event_end_date: z.string()
});

export const updateEventSchema = z.object({
    event_id: z.number(),
    rrpps: z.array(z.number()).nullable().optional(),
    validators: z.array(z.number()).nullable().optional(),
    name: z.string().optional(),
    description: z.string().nullable().optional(),
    location: z.string().optional(),
    max_capacity: z.number().optional(),
    min_age: z.number().optional(),
    cbu: z.string().optional(),
    event_start_date: z.string().optional(),
    event_end_date: z.string().optional()
});


export const createEventStageSchema = z.object({
    name: z.string(),
    event_id: z.number(),
    price: z.number(),
    stock: z.number(),
    event_stage_start_date: z.string(),
    event_stage_end_date: z.string()
});

export const updateEventStageSchema = z.object({
    event_stage_id: z.number(),
    name: z.string().optional(),
    event_id: z.number().optional(),
    price: z.number().optional(),
    stock: z.number().optional(),
    event_stage_start_date: z.string().optional(),
    event_stage_end_date: z.string().optional()
});
