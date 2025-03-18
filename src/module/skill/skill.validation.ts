import { z } from "zod";

const createSkillValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Skill name is required" }),
        proficiency: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"], {
            message: "Proficiency must be one of: Beginner, Intermediate, Advanced, Expert",
        }),
        category: z.enum(
            [
                "Programming Languages",
                "Frontend Frameworks",
                "Backend Technologies",
                "Databases",
                "CSS Frameworks",
                "Tools",
            ],
            {
                message:
                    "Category must be one of: Programming Languages, Frontend Frameworks, Backend Technologies, Databases, CSS Frameworks, Tools",
            }
        ),
        experience: z.string().min(1, { message: "Experience is required" }),
        icon: z.string().url({ message: "Icon must be a valid URL" }),
    })
});

export const skillValidation = {
    createSkillValidationSchema
}
