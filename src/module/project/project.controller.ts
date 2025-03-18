import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ProjectServices } from './project.service';

// Project create
const createProject = catchAsync(async (req, res) => {
    const project = req.body;
    const result = await ProjectServices.createProjectIntoDB(project);
    res.status(200).json({
        message: 'Project created successfully',
        success: true,
        data: result,
    })
})

// get all Projects
const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectsFromDB();
    res.status(200).json({
        message: 'Projects are retrieved successfully',
        success: true,
        data: result,
    })
});




// get specif Project
const getSpecifProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.getSpecifProjectFromDB(id);
    res.status(200).json({
        message: 'Projects retrieved successfully',
        success: true,
        data: result,
    })
})

// update Project
const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await ProjectServices.updateProjectFromDB(
        id,
        data
    );
    res.status(200).json({
        message: 'Project updated successfully',
        success: true,
        data: result,
    });
})


// delete Project
const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    await ProjectServices.deleteProjectFromDB(id);
    res.status(200).json({
        message: 'Project deleted successfully',
        success: true,
        data: {},
    })
});

export const ProjectControllers = {
    createProject,
    getSpecifProject,
    getAllProjects,
    updateProject,
    deleteProject,
};
