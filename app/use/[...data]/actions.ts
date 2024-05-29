"use server"
import db from "@/app/db/db";
import {users} from "@/models/queries/users";


async function getUserData(user_id:number, ticket_id:number):Promise<IUserData[]> {
    const data = await db.query(users.selUserData, [user_id, ticket_id]);
    const rows = data.rows;
    return rows as IUserData[];
}

export {
    getUserData
}