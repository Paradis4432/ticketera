import db from "@/utils/db";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const [rows] = await db.query("SELECT * FROM events");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}