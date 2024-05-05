import {z} from 'zod'

export const ContactFormSchema = z.object({
    name: z.string().min(5).max(255),
    email: z.string().email(),
    message: z.string().min(2, {message: "message is required"}).max(255),
})