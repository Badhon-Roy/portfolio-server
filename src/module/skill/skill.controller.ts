import catchAsync from "../../utils/catchAsync";
import { SkillServices } from "./skill.service";




//*create Skill
const createSkill = catchAsync(async (req, res) => {
    const result = await SkillServices.createSkillIntoDB(req.body)
    res.status(200).json({
        success: true,
        message: "Skill created successfully",
        data: result
    })
})

//* get all Skill
const getAllSkill = catchAsync(async (req, res) => {
    const Skills = await SkillServices.getAllSkillFromDB();
    res.status(200).json({
        success: true,
        message: "Skills fetched successfully",
        data: Skills,
    });
});


//* get single all Skill
const getSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillServices.getSingleSkillFromDB(id)
    res.status(200).json({
        success: true,
        message: "Skills fetched successfully",
        data: result
    })
})


//*update Skill
const updateSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillServices.updateSkillIntoDB(id, req.body)
    res.status(200).json({
        success: true,
        message: "Skill updated successfully",
        data: result
    })
})

//* delete Skill
const deleteSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    await SkillServices.deleteSkillFromDB(id)
    res.status(200).json({
        success: true,
        message: "Skill deleted successfully",
    })
})

export const SkillControllers = {
    createSkill,
    getAllSkill,
    getSingleSkill,
    deleteSkill,
    updateSkill
}