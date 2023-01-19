import { Schema, models, model } from "mongoose";

export interface User {
    name: string,
    email: string,
    password: string
}

const ProjectsSchema = new Schema<User>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
}, { timestamps: true })

export default models.users || model<User>("users", ProjectsSchema) 