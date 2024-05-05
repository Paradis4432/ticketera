'use client'

import {SubmitHandler, useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'


import {toast, Toaster} from 'sonner'
import {sendEmail} from "@/app/contact/zutils/SendEmail";
import {ContactFormSchema} from "@/app/contact/zutils/ContactSchemas";


export type ContactFormInputs = z.infer<typeof ContactFormSchema>

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(ContactFormSchema)
    })

    const processForm: SubmitHandler<ContactFormInputs> = async data => {
        const result = await sendEmail(data)

        if (result?.success) {
            console.log({data: result.data})
            toast.success('Email sent!')
            reset()
            return
        }

        // toast error
        console.log(result?.error)
        toast.error('Something went wrong!')
    }

    return (
        <div>
            <Toaster/>

            <form onSubmit={handleSubmit(processForm)}>
                <div>
                    <input placeholder='name' value={"test00"} {...register('name')}/>
                    {errors.name?.message && (
                        <p>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <input placeholder='email' value={"Lucasezequiel120202@gmail.com"}{...register('email')}/>
                    {errors.email?.message && (
                        <p className='ml-1 mt-1 text-sm text-red-400'>
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <textarea placeholder='message' value={"test message"} {...register('message')}/>
                    {errors.message?.message && (
                        <p>{errors.message.message}</p>
                    )}
                </div>

                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>

    )
}

export default ContactForm;