import queries from "@/models/events";
import db from "@/app/zutils/db";
import {delay} from "@/app/api/config";
import IEvent from "@/app/zints/IEvent";
import {NextApiRequest, NextApiResponse} from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (delay) await new Promise(resolve => setTimeout(resolve, 2000))
        const {name} = req.body;
        const data = await db.query(queries.create, name);
        return Response.json({
            message: "success",
            code: 200,
            data: data[0] as IEvent[]
        })
    } catch (e) {
        console.error(e)
        return Response.json({
            message: "error",
            code: 500,
            data: []
        })
    }
}