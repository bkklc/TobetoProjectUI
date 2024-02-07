import { BaseService } from "../core/services/baseServices";
import AddRequestEducation from "../models/requests/education/AddRequestEducation";
import UpdateRequestEducation from "../models/requests/education/UpdateRequestEducation";
import AddResponseEducation from "../models/response/education/AddResponseEducation";
import GetAllEducation from "../models/response/education/GetAllEducation";
import GetByIdEducation from "../models/response/education/GetByIdEducation";
import UpdateResponseEducation from "../models/response/education/UpdateResponseEducation";

class EducationService extends BaseService<GetAllEducation,GetByIdEducation,AddRequestEducation,AddResponseEducation,UpdateRequestEducation,UpdateResponseEducation>{

    constructor() {
        super();
        this.apiUrl = "Educations";
    }
}

export default new EducationService();