import { BaseService } from "../core/services/baseServices";
import AddRequestUserLanguage from "../models/requests/userLanguage/AddRequestUserLanguage";
import UpdateRequestUserLanguage from "../models/requests/userLanguage/UpdateRequestUserLanguage";
import AddResponseUserLanguage from "../models/response/userLanguage/AddResponseUserLanguage";
import GetAllResponseUserLanguage from "../models/response/userLanguage/GetAllResponseUserLanguage";
import GetByIdResponseUserLanguage from "../models/response/userLanguage/GetByIdResponseUserLanguage";
import UpdateResponseUserLanguage from "../models/response/userLanguage/UpdateResponseUserLanguage";

class UserLanguageService extends BaseService<
  GetAllResponseUserLanguage,
  GetByIdResponseUserLanguage,
  AddRequestUserLanguage,
  AddResponseUserLanguage,
  UpdateRequestUserLanguage,
  UpdateResponseUserLanguage
> {
  constructor() {
    super();
    this.apiUrl = "UserLanguages";
  }
}

export default new UserLanguageService();