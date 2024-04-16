// get all events
import db from "@/utils/db";

export const GET = async ({res}: { req: any, res: any }) => {
    try {
        const [rows] = await db.query("SELECT * FROM events");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}