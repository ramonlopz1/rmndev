import { Schema, models, model } from "mongoose";

export interface Project {
    name: string,
    filter: string,
    technologies: { _id: string, name: string }[],
    uri: string,
    img: string,
    type: string
    date?: Date
}

const ProjectsSchema = new Schema<Project>({
    name: { type: String },
    date: { type: Date, },
    technologies: [{ name: String }],
    uri: { type: String },
    img: { type: String }
}, { timestamps: true })

export default models.projects || model<Project | any >("projects", ProjectsSchema) 