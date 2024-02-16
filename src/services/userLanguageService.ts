import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseServices";
import Paginate from "../models/paginate";
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

  getByUserId(userId: any): Promise<AxiosResponse<Paginate<GetAllResponseUserLanguage>, any>> {
		return axiosInstance.get<Paginate<GetAllResponseUserLanguage>>(this.apiUrl + "/getByUserId?userId=" + userId + "&PageIndex=0&PageSize=20");
	}
}

export default new UserLanguageService();