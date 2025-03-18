import { ISkill } from "./skill.interface";
import SkillModel from "./skill.model";


//*create Skill
const createSkillIntoDB = async(skill : ISkill)=>{
    const result = await SkillModel.create(skill)
    return result;
}

//* get all Skill post
const getAllSkillFromDB = async () => {
  const result = await SkillModel.find();
  return result;
};


//* get single Skill post
const getSingleSkillFromDB =async(id: string)=>{
    const result = await SkillModel.findById(id)
    return result
}

//*update Skill post
const  updateSkillIntoDB = async(id : string, data : any )=>{
    const result = await SkillModel.findByIdAndUpdate(id,data, {
        isNew : true
    })
    return result;
}

//*delete Skill post
const deleteSkillFromDB = async(id: string)=>{
    const result = await SkillModel.findByIdAndDelete(id)
    return result
}

export const SkillServices ={
    createSkillIntoDB,
    getAllSkillFromDB,
    getSingleSkillFromDB,
    updateSkillIntoDB,
    deleteSkillFromDB
}