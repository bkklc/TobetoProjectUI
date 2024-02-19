export default interface GetAllUserSkill{
    Id:number,
    UserId:number,
    SkillId:number,
}

export const defaultGetAllUserSkill: GetAllUserSkill = {
    Id:0,
    UserId:0,
    SkillId:0,
  };