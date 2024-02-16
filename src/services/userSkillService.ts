import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import Paginate from "../models/paginate";
import AddRequestUserSkill from "../models/requests/userSkill/AddRequestUserSkill";
import UpdateRequestUserSkill from "../models/requests/userSkill/UpdateRequestUserSkill";
import AddResponseUserSkill from "../models/response/userSkill/AddResponseUserSkill";
import GetAllUserSkill from "../models/response/userSkill/GetAllUserSkill";
import GetByIdUserSkill from "../models/response/userSkill/GetByIdUserSkill";
import UpdateResponseUserSkill from "../models/response/userSkill/UpdateResponseUserSkill";
import axiosInstance from "../core/interceptors/axiosInterceptor";

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

    getByUserId(userId: any): Promise<AxiosResponse<Paginate<GetAllUserSkill>, any>> {
		return axiosInstance.get<Paginate<GetAllUserSkill>>(this.apiUrl + "/getByUserId?userId=" + userId + "&PageIndex=0&PageSize=20");
	}
}

export default new UserSkillStudent();











