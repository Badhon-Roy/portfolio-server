import { z } from "zod";

const createProjectValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        images: z.array(z.string().url()).min(1),
        description: z.string().min(10),
        technologiesUsed: z.object({
            frontend: z.array(z.string()).min(1),
            backend: z.array(z.string()).min(1),
            database: z.string().min(1),
            authentication: z.string().min(1),
        }),
        projectType: z.enum(["personal", "team"]),
        liveSite: z.string().url(),
        clientSiteGitHub: z.string().url(),
        serverSiteGitHub: z.string().url(),
        keyFeatures: z.array(z.string()).min(1),
    })
});
export const projectValidation = {
    createProjectValidationSchema
}