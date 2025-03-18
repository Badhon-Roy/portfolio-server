import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { projectValidation } from "./project.validation";


const router = Router();
router.post('/', validateRequest(projectValidation.createProjectValidationSchema), ProjectControllers.createProject)
router.get('/', ProjectControllers.getAllProjects)
router.get('/:id', ProjectControllers.getSpecifProject)
router.patch('/:id', ProjectControllers.updateProject)
router.delete('/:id', ProjectControllers.deleteProject)


export const projectRouter = router;