"use server"

import {db} from "@/app/db/db";
import {users} from "@/models/queries/users";



async function saveUser(email: string, name: string) {
    await db.query(users.saveUser, [email, name]);
}

export {
    saveUser
}