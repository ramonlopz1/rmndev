import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    name: { type: String },
    date: { type: String, },
    technologies: [{ name: String }],
    uri: { type: String },
    img: { type: String }
}, { timestamps: true })

export default mongoose.models.projects || mongoose.model("projects", ProjectsSchema) 