import db from "@/app/zutils/db";
import {delay} from "@/app/api/config";
import IEvent from "@/app/zints/IEvent";
import queries from "@/models/QueriesModels";

export const GET = async (req: any, {params}: any) => {
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