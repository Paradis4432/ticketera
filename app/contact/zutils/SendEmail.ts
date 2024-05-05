"use server"

import {ContactFormInputs} from "@/app/contact/zcomps/ContactForm";
import {Resend} from "resend";
import ContactFormEmail from "@/app/contact/zints/ContactFormEmail";
import {ContactFormSchema} from "@/app/contact/zutils/ContactSchemas";

const resend = new Resend(process.env.RESEND_API_KEY)
const source = process.env.RESEND_EMAIL as string

export async function sendEmail(data: ContactFormInputs) {
    const r = ContactFormSchema.safeParse(data);
    try {
        const {name, email, message} = r.data as ContactFormInputs;

        const resendResponse = await resend.emails.send({
            from: source,
            to: [email],
            subject: "Contact Test",
            text: `Name: ${name}`,
            react: ContactFormEmail({name, email, message})
        })
    } catch (e) {
        return {success: false, data: null, error: e}
    }

    return {success: true, data: data, error: "non"}
}