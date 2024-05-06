import {NextResponse} from "next/server";
import queries from "@/models/events";
import db from "@/app/zutils/db";

export async function  GET (): Promise<NextResponse> {
    const data =  await db.query(queries.selAll);
    return NextResponse.json({
        message: "success",
        code: 200,
        data: data[0]
    })
}