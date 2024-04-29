import db from "@/app/zutils/db";
import {delay} from "@/app/api/config";
import IEvent from "@/app/zints/IEvent";
import queries from "@/models/events";
import {NextApiRequest, NextApiResponse} from "next";

/*export default async function getEvents(): Promise<IQueryRes<IEvent[]>> {
    try {
        if (delay) await new Promise(resolve => setTimeout(resolve, 2000))
        const data = await db.query(queries.selEvents);
        return {
            message: "success",
            code: 200,
            data: data[0] as IEvent[]
        }
    } catch (e) {
        return {
            message: "error",
            code: 500,
            data: []
        }
    }
}*/
export const GET = async (req : any, {params} : any) => {
    try {
        // TODO this is not pooling the queries, if a request is made, then you go back and go forward again the timeout
        // of the first query will delay the second one
        // TODO add message and status for no error but not found

        if (delay) await new Promise(resolve => setTimeout(resolve, 2000))
        const data = await db.query(queries.selAll);
        return Response.json({
            message: "success",
            code: 200,
            data: data[0] as IEvent[]
        })
    } catch (e) {
        return Response.json({
            message: "error",
            code: 500,
            data: []
        })
    }
}

/*
export const GET = async (req: Request, res: Response) => {
    if (config) await new Promise(resolve => setTimeout(resolve, 2000));
    const data = await db.query(queries.selEvents);
    return new Response(JSON.stringify(data[0]));
}*/

/*
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    if (config) await new Promise(resolve => setTimeout(resolve, 2000));
    const data = await db.query(queries.selEvents);
    console.log(data[0])
    res.status(200).json(data[0]);
}
*/

/*

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (config) await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        const data = await db.query(queries.selEvents);
        res.status(200).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
}*/
