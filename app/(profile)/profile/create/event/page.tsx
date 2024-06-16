"use client"
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {createEvent} from "@/app/(profile)/profile/create/event/actions";
import {useSession} from "next-auth/react";

const eventSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
    description: z.string().min(1, "La descripcion no puede estar vacío"),
    location: z.string().min(1, "La locacion no puede estar vacío"),
    starting_date: z.string().min(1, "La fecha de inicio no puede estar vacía").refine((val) => !isNaN(Date.parse(val)), {
        message: "La fecha de inicio no es válida"
    })
});

type TEventSchema = z.infer<typeof eventSchema>;

function Page() {
    const {data: session} = useSession();
    const email = session?.user?.email;
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm<TEventSchema>({
        resolver: zodResolver(eventSchema)
    });

    const onSubmit = async (data: TEventSchema) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const result = await createEvent(data, email)
        reset();
    };

    return (
        <div>
            <h1>create event</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    name
                    <input {...register('name')} type="text"/>
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    description
                    <input {...register('description')} type="text"/>
                    {errors.description && <span>{errors.description.message}</span>}
                </label>
                <label>
                    location
                    <input {...register('location')} type="text"/>
                    {errors.location && <span>{errors.location.message}</span>}
                </label>
                <label>
                    starting date
                    <input {...register('starting_date')} type="datetime-local"/>
                    {errors.starting_date && <span>{errors.starting_date.message}</span>}
                </label>
                <button type="submit" disabled={isSubmitting}>create</button>
            </form>
        </div>
    )
}

export default Page;
