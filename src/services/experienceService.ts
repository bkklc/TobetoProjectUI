import { BaseService } from "../core/services/baseServices";
import AddRequestExperience from "../models/requests/experience/AddRequestExperience";
import UpdateRequestExperience from "../models/requests/experience/UpdateRequestExperience";
import AddResponseExperience from "../models/response/experience/AddResponseExperience";
import GetAllExperience from "../models/response/experience/GetAllExperience";
import GetByIdExperience from "../models/response/experience/GetByIdExperience";
import UpdateResponseExperience from "../models/response/experience/UpdateResponseExperience";

class ExperienceService extends BaseService<GetAllExperience,GetByIdExperience,AddRequestExperience,AddResponseExperience,UpdateRequestExperience,UpdateResponseExperience>{

    constructor() {
        super();
        this.apiUrl = "Experiences";
    }
}

export default new ExperienceService();