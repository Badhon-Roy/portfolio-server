import { IProject } from "./project.interface";
import ProjectModel from "./project.model";

// project create
const createProjectIntoDB = async (project: IProject) => {
    const result = await ProjectModel.create(project);
    return result;
};

// all Project get
const getAllProjectsFromDB = async () => {
    const result = await ProjectModel.find();
    return result;
};

// specif Project get
const getSpecifProjectFromDB = async (id: string) => {
    const result = await ProjectModel.findById(id);
    return result;
};

// Project update
const updateProjectFromDB = async (id: string, data: IProject) => {
    const result = await ProjectModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    return result;
};

// specif Project delete
const deleteProjectFromDB = async (id: string) => {
    const result = await ProjectModel.findByIdAndDelete(id);
    return result;
};
export const ProjectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    getSpecifProjectFromDB,
    updateProjectFromDB,
    deleteProjectFromDB,
};
