import db from "@/app/db/db";
import {users} from "@/models/queries/users";


async function getUserData(user_id:number, event_id:number, ticket_id:number):Promise<IUserData[]> {
    const data = await db.query(users.selUserData, [user_id, event_id, ticket_id])
    return data[0] as IUserData[]
}

export {
    getUserData
}