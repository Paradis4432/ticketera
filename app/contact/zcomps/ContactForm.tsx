'use client'

import {SubmitHandler, useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'


import {toast, Toaster} from 'sonner'
import {ContactFormSchema} from "@/app/contact/zcomps/ContactSchema";
import {sendEmail} from "@/app/contact/zcomps/actions";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

function ContactForm() {

    const testToat = () => {
        console.log("testing")
        toast.success('Email sent!')
    }

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

            <button onClick={testToat}>
                testtoast
            </button>

            <form
                onSubmit={handleSubmit(processForm)}
            >

                <div>
                    <input
                        placeholder='name'
                        {...register('name')}
                    />
                    {errors.name?.message && (
                        <p>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        placeholder='email'
                        className='w-full rounded-lg'
                        {...register('email')}
                    />
                    {errors.email?.message && (
                        <p className='ml-1 mt-1 text-sm text-red-400'>
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
        <textarea
            rows={5}
            cols={5}
            placeholder='message'
            className='w-full rounded-lg'
            {...register('message')}
        />
                    {errors.message?.message && (
                        <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>

    )
}

export default ContactForm;