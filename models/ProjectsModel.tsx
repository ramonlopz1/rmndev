import { Schema, models, model } from "mongoose";

interface ProjectModel {
    name: string,
    date: string,
    technologies: { name: string }[],
    uri: string,
    img: string
}

const ProjectsSchema = new Schema<ProjectModel>({
    name: { type: String },
    date: { type: String, },
    technologies: [{ name: String }],
    uri: { type: String },
    img: { type: String }
}, { timestamps: true })

export default models.projects || model<ProjectModel>("projects", ProjectsSchema) 