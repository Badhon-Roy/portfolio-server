import { z } from "zod";


const createBlogPostSchemaValidation = z.object({
    body: z.object({
        title: z.string().min(1, { message: "Title is required" }),
        tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
        category: z.string().min(1, { message: "Category is required" }),
        content: z.string().min(10, { message: "Content must be at least 10 characters long" }),
        thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }),
    })
})

export const blogValidation = {
    createBlogPostSchemaValidation
}