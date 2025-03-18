import { Router } from "express";
import { projectRouter } from "../module/project/project.route";
import { blogsRouter } from "../module/blog/blog.route";
import { skillRouter } from "../module/skill/skill.route";


const router = Router();

const moduleRoutes = [
    {
        path : "/projects",
        route : projectRouter
    },
    {
        path : "/blogs",
        route : blogsRouter
    },
    {
        path : "/skills",
        route : skillRouter
    }
]

moduleRoutes.forEach((route)=> router.use(route?.path, route?.route));
export default router;