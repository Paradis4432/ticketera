import queries from "@/models/QueriesRepository";
import db from "@/app/zutils/db";
import IEvent from "@/app/zints/IEvent";

export const POST = async (request: any) => {
    const {name} = await request.json();
    console.log(name)
    if (name === undefined) {
        return Response.json({
            message: "error",
            code: 400,
            data: []
        })
    }
    const data = await db.query(queries.create, name);
    return Response.json({
        message: "success",
        code: 200,
        data: data[0] as IEvent[]
    })
}