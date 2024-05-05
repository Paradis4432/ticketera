"use server"

import {ContactFormInputs} from "@/app/contact/zcomps/ContactForm";

export async function sendEmail(data: ContactFormInputs) {
    return {success: true, data: data, error: "non"}
}