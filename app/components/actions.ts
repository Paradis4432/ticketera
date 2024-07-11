"use server"

import {db} from "@/app/db/db";
import {users} from "@/models/queries/users";


async function saveUser(email: string, name: string) {
    await db.query(users.saveUser, [email, name]);
}


async function sendEmail(email: string, content: any) {
    /*    const processForm: SubmitHandler<ContactFormInputs> = async data => {
            const result = await sendEmail(data)

            if (result?.success) {
                console.log({data: result.data})
                toast.success('Email sent!')
                return
            }

            // toast error
            console.log(result?.error)
            toast.error('Something went wrong!')
        }*/
}

export {
    saveUser
}
