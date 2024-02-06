import { BaseService } from "../core/services/baseServices";
import AddRequestLanguage from "../models/requests/language/AddRequestLanguage";
import UpdateRequestLanguage from "../models/requests/language/UpdateRequestLanguage";
import AddResponseLanguage from "../models/response/language/AddResponseLanguage";
import GetAllLanguage from "../models/response/language/GetAllLanguage";
import GetByIdLanguage from "../models/response/language/GetByIdLanguage";
import UpdateResponseLanguage from "../models/response/language/UpdateResponseLanguage";

class languageService extends BaseService<
GetAllLanguage,GetByIdLanguage,AddRequestLanguage,AddResponseLanguage,UpdateRequestLanguage,UpdateResponseLanguage>{

    constructor() {
        super();
        this.apiUrl = "Languages";
    }
}

export default new languageService();