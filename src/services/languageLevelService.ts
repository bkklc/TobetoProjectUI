import { BaseService } from "../core/services/baseServices";
import AddRequestLanguageLevel from "../models/requests/languageLevel/AddRequestLanguageLevel";
import UpdateRequestLanguageLevel from "../models/requests/languageLevel/UpdateRequestLanguageLevel";
import AddResponseLanguageLevel from "../models/response/languageLevel/AddResponseLanguageLevel";
import GetAllLanguageLevel from "../models/response/languageLevel/GetAllLanguageLevel";
import GetByIdLanguageLevel from "../models/response/languageLevel/GetByIdLanguageLevel";
import UpdateResponseLanguageLevel from "../models/response/languageLevel/UpdateResponseLanguageLevel";

class languageLevelService extends BaseService<
GetAllLanguageLevel,GetByIdLanguageLevel,AddRequestLanguageLevel,AddResponseLanguageLevel,UpdateRequestLanguageLevel,UpdateResponseLanguageLevel>{

    constructor() {
        super();
        this.apiUrl = "LanguageLevels";
    }
}

export default new languageLevelService();