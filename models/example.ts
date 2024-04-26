
import "./events"
import queries from "@/models/events";
import db from "@/app/zutils/db";
async function a(){
    await db.query(queries.selEvents)
}