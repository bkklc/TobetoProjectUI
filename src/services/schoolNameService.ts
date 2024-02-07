import { BaseService } from "../core/services/baseServices";
import { AddRequestSchoolName } from "../models/requests/schoolName/addRequestSchoolName";
import { UpdateRequestSchoolName } from "../models/requests/schoolName/updateRequestSchoolName";
import { AddResponseSchoolName } from "../models/response/schoolName/addResponseSchoolName";
import { GetAllSchoolName } from "../models/response/schoolName/getAllSchoolName";
import { GetByIdSchoolName } from "../models/response/schoolName/getByIdSchoolName";
import { UpdateResponseSchoolName } from "../models/response/schoolName/updateResponseSchoolName";



class SchoolName extends BaseService<
GetAllSchoolName,
GetByIdSchoolName,
AddRequestSchoolName,
AddResponseSchoolName,
UpdateRequestSchoolName,
UpdateResponseSchoolName>{

    constructor() {
        super();
        this.apiUrl = "SchoolNames";
    }
}

export default new SchoolName();