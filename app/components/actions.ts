"use server"

import db from "@/app/db/db";

async function saveUser({email}: { email: string }) {
    await db.query("isnert into users email = $1", [email])
}

export {
    saveUser
}