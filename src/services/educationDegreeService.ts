import { BaseService } from "../core/services/baseServices";
import AddRequestEducationDegree from "../models/requests/educationDegree/AddRequestEducationDegree";
import UpdateRequestEducationDegree from "../models/requests/educationDegree/UpdateRequestEducationDegree";
import AddResponseEducationDegree from "../models/response/educationDegree/AddResponseEducationDegree";
import GetAllEducationDegree from "../models/response/educationDegree/GetAllEducationDegree";
import GetByIdEducationDegree from "../models/response/educationDegree/GetByIdEducationDegree";
import UpdateResponseEducationDegree from "../models/response/educationDegree/UpdateResponseEducationDegree";

class EducationDegreeService extends BaseService<GetAllEducationDegree,GetByIdEducationDegree,AddRequestEducationDegree,AddResponseEducationDegree,UpdateRequestEducationDegree,UpdateResponseEducationDegree>{

    constructor() {
        super();
        this.apiUrl = "EducationDegrees";
    }
}

export default new EducationDegreeService();