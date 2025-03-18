import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogControllers } from "./blog.controller";
import { blogValidation } from "./blog.validation";


const router = Router();

router.post('/', validateRequest(blogValidation.createBlogPostSchemaValidation), BlogControllers.createBlog)
router.get('/', BlogControllers.getAllBlog)
router.get('/:id', BlogControllers.getSingleBlog)
router.patch('/:id', BlogControllers.updateBlog)
router.delete('/:id', BlogControllers.deleteBlog)

export const blogsRouter = router;