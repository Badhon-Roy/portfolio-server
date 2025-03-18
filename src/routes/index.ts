import { Router } from "express";
import { projectRouter } from "../module/project/project.route";


const router = Router();

const moduleRoutes = [
    {
        path : "/projects",
        route : projectRouter
    }
]

moduleRoutes.forEach((route)=> router.use(route?.path, route?.route));
export default router;