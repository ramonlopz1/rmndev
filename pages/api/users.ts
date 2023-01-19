import type { NextApiRequest, NextApiResponse } from 'next'
import DB from "../../services/mongo-services";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            await DB.connect()
            console.info("Connected to MongoDB")

            const projects = await DB.getAll()
            console.log(projects)
            res.status(200).json(projects)
        } catch (err) {
            console.error(err)
            res.status(500).json({
                error: "bad request"
            })
        }
    } else {
        res.status(504).send({
            error: "You're not authorized to use this method."
        })
    }
}