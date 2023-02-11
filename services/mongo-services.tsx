import mongoose from 'mongoose'
import ProjectsModel, { Project } from "../models/ProjectsModel";

const connect = async () => {
    mongoose.connect(process.env.MONGODBURL)
}

const getAll = async () => {
    const data = await ProjectsModel.find()
    return data
}

const getOne = async (id: any) => {
    const data = await ProjectsModel.findByIdAndUpdate(id)
    return data
}

const post = async (elem: Object) => {
    const newProject = new ProjectsModel(elem)
    const data = await newProject.save()
    return data
}

const put = async (elem: Object, id: any) => {
    const updatedProject = await ProjectsModel.findByIdAndUpdate(
        id,
        { $set: elem },
        { new: true }
    )

    return updatedProject
}

const del = async (id: string) => {
    await ProjectsModel.findByIdAndDelete(id)
}

const DB = {
    connect,
    getAll,
    getOne,
    post,
    put,
    del
}

export default DB