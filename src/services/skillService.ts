import { BaseService } from "../core/services/baseServices";
import { AddRequestSkill } from "../models/requests/skill/addRequestSkill";
import { UpdateRequestSkill } from "../models/requests/skill/updateRequestSkill";
import { AddResponseSkill } from "../models/response/Skill/addResponseSkill";
import { GetAllSkill } from "../models/response/Skill/getAllSkill";
import { GetByIdSkill } from "../models/response/Skill/getByIdSkill";
import { UpdateResponseSkill } from "../models/response/Skill/updateResponseSkill";



class Skill extends BaseService<
GetAllSkill,
GetByIdSkill,
AddRequestSkill,
AddResponseSkill,
UpdateRequestSkill,
UpdateResponseSkill>{

    constructor() {
        super();
        this.apiUrl = "Skills";
    }
}

export default new Skill();