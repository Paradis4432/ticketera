"use server"

import {SubmitHandler} from "react-hook-form";
import {ContactFormInputs} from "@/app/validations/mails";
import {sendEmail} from "@/app/utils/emails";
import {toast} from "sonner";

const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
        console.log({data: result.data})
        toast.success('Email sent!')
        return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
}