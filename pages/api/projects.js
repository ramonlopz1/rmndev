import ProjectsModel from "../../models/ProjectsModel";
import connectMongo from "../../services/mongoConnect";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectMongo()
            console.info("Connected to MongoDB")

            const projects = await ProjectsModel.find()
            res.status(200).json(projects)
        } catch (err) {
            console.error(err)
            res.status(500).json({
                error: "bad request"
            })
        }
    } else {
        res.status(500).send({
            error: "You're not authorized to use this method."
        })
    }
}