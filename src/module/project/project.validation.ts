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
        teamMembers: z.string().default('1'),
        projectType: z.enum(["personal", "team"]),
        role: z.string().min(1),
        liveSite: z.string().url(),
        clientSiteGitHub: z.string().url(),
        serverSiteGitHub: z.string().url(),
        keyFeatures: z.array(z.string()).min(1),
        challengesFaced: z.array(z.string()).min(1),
        futureImprovements: z.array(z.string()).min(1),
    })
});
export const projectValidation = {
    createProjectValidationSchema
}