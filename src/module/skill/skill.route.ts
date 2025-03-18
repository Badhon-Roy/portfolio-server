import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillValidation } from "./skill.validation";
import { SkillControllers } from "./skill.controller";

const router = express.Router();

// Create a new skill
router.post("/", validateRequest(skillValidation.createSkillValidationSchema), SkillControllers.createSkill);
router.get("/", SkillControllers.getAllSkill);
router.get("/:id", SkillControllers.getSingleSkill);
router.patch("/:id", SkillControllers.updateSkill);
router.delete("/:id", SkillControllers.deleteSkill);

export const skillRouter = router;
