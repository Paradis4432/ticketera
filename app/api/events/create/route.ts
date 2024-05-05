import queries from "@/models/QueriesModels";
import db from "@/app/zutils/db";
import IEvent from "@/app/zints/IEvent";
import {NextResponse} from "next/server";

export const POST = async (request: any) => {
    const {name} = await request.json();
    console.log(name)
    if (name === undefined) {
        return NextResponse.json({
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