import mongoose, { Schema } from "mongoose";
import { ISkill } from "./skill.interface";


const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  proficiency: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Programming Languages",
      "Frontend Frameworks",
      "Backend Technologies",
      "Databases",
      "CSS Frameworks",
      "Tools",
    ],
    required: true,
  },
  experience: { type: String, required: true },
  icon: { type: String, required: true },
});

const SkillModel = mongoose.model<ISkill>("Skill", SkillSchema);
export default SkillModel;
