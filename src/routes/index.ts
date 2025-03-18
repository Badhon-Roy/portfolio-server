import { Router } from "express";
import { projectRouter } from "../module/project/project.route";
import { blogsRouter } from "../module/blog/blog.route";
import { skillRouter } from "../module/skill/skill.route";
import { authRouter } from "../module/auth/auth.route";


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
    },
    {
        path : "/auth",
        route : authRouter
    }
]

moduleRoutes.forEach((route)=> router.use(route?.path, route?.route));
export default router;