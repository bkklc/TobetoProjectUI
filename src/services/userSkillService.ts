import { BaseService } from "../core/services/baseServices";
import AddRequestUserSkill from "../models/requests/userSkill/AddRequestUserSkill";
import UpdateRequestUserSkill from "../models/requests/userSkill/UpdateRequestUserSkill";
import AddResponseUserSkill from "../models/response/userSkill/AddResponseUserSkill";
import GetAllUserSkill from "../models/response/userSkill/GetAllUserSkill";
import GetByIdUserSkill from "../models/response/userSkill/GetByIdUserSkill";
import UpdateResponseUserSkill from "../models/response/userSkill/UpdateResponseUserSkill";

class UserSkillStudent extends BaseService<
    GetAllUserSkill,
    GetByIdUserSkill,
    AddRequestUserSkill,
    AddResponseUserSkill,
    UpdateRequestUserSkill,
    UpdateResponseUserSkill
>{

    constructor() {
        super();
        this.apiUrl = "UserSkills";
    }

}

export default new UserSkillStudent();











