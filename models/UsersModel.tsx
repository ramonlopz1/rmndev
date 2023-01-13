import { Schema, models, model } from "mongoose";

interface UsersModel {
    name: string,
    email: string,
    password: string
}

const ProjectsSchema = new Schema<UsersModel>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
}, { timestamps: true })

export default models.users || model<UsersModel>("users", ProjectsSchema) 