// Importing necessary utils, assuming db is set up for database interactions
import type {NextApiRequest, NextApiResponse} from 'next';
import db from "@/utils/db";

// Handler function for the API route
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Only proceed for GET requests
    if (req.method === 'POST') {
        console.log("req.query: ", req.query);

        const {name} = req.query; // Assuming a query parameter 'name'

        try {
            const [rows] = await db.query("INSERT INTO events (name) values(?)", [name]);

            console.log(rows);
            // For the purpose of this example, returning a placeholder response
            // Replace this with your actual row data
            res.status(200).json({message: `created event with name: ${name}`});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Something went wrong"});
        }
    } else {
        // Handling unsupported request methods
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `Method ${req.method} Not Allowed`});
    }
}
