"use server"

import db from "@/app/db/db";
import {users} from "@/models/queries/users";

async function getUserId(email: string) {
    const result = await db.query(users.selUserId, [email]);
    return result.rows[0].user_id;
}

async function saveUser(email: string, name: string) {
    await db.query(users.saveUser, [email, name]);
}

export {
    saveUser, getUserId
}