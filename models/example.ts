
import "./events"
import queries from "@/models/events";
import db from "@/app/zutils/db";
async function a(id : number){
    await db.query(queries.updateNameById, ["name", id])
}