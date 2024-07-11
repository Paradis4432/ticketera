"use client"

import {Contact} from "@/app/components/ui/contact";
import {ContactFormInputs, ContactFormSchema} from "@/app/validations/mails";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import  Navbar from "@/app/components/ui/navbar";

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
        <main>
            <body>
                <Navbar />
                <Contact />
            </body>
        </main>
    )

}

export default Page;