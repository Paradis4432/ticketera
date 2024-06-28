"use client"

import {Contact} from "@/app/components/ui/contact";
import {ContactFormInputs, ContactFormSchema} from "@/app/validations/mails";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

function Page() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(ContactFormSchema)
    })

    return (
        <Contact/>
    )

}

export default Page;