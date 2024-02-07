import { BaseService } from "../core/services/baseServices";
import { AddRequestProgrammingLanguage } from "../models/requests/programmingLanguages/addRequestProgrammingLanguage";
import { UpdateRequestProgrammingLanguage } from "../models/requests/programmingLanguages/updateRequestProgrammingLanguage";
import { AddResponseProgrammingLanguage } from "../models/response/programmingLanguages/addResponseProgrammingLanguage";
import { GetAllProgrammingLanguage } from "../models/response/programmingLanguages/getAllProgrammingLanguage";
import { GetByIdProgrammingLanguage } from "../models/response/programmingLanguages/getByIdProgrammingLanguage";
import { UpdateResponseProgrammingLanguage } from "../models/response/programmingLanguages/updateResponseProgrammingLanguage";



class ProgrammingLanguage extends BaseService<
GetAllProgrammingLanguage,
GetByIdProgrammingLanguage,
AddRequestProgrammingLanguage,
AddResponseProgrammingLanguage,
UpdateRequestProgrammingLanguage,
UpdateResponseProgrammingLanguage>{

    constructor() {
        super();
        this.apiUrl = "ProgrammingLanguages";
    }
}

export default new ProgrammingLanguage();