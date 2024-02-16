import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import AddRequestUserSocialMedia from "../models/requests/userSocialMedia/AddRequestUserSocialMedia";
import UpdateRequestUserSocialMedia from "../models/requests/userSocialMedia/UpdateRequestUserSocialMedia";
import AddResponseUserSocialMedia from "../models/response/userSocialMedia/AddResponseUserSocialMedia";
import GetAllUserSocialMedia from "../models/response/userSocialMedia/GetAllUserSocialMedia";
import GetByIdUserSocialMedia from "../models/response/userSocialMedia/GetByIdUserSocialMedia";
import UpdateResponseUserSocialMedia from "../models/response/userSocialMedia/UpdateResponseUserSocialMedia";
import Paginate from "../models/paginate";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class UserSocialMediaService extends BaseService<GetAllUserSocialMedia,GetByIdUserSocialMedia,AddRequestUserSocialMedia,AddResponseUserSocialMedia,UpdateRequestUserSocialMedia,UpdateResponseUserSocialMedia>{

    constructor() {
        super();
        this.apiUrl = "UserSocialMedias";
    }

    getByUserId(userId: any): Promise<AxiosResponse<Paginate<GetAllUserSocialMedia>, any>> {
		return axiosInstance.get<Paginate<GetAllUserSocialMedia>>(this.apiUrl + "/getByUserId?userId=" + userId + "&PageIndex=0&PageSize=20");
	}
}

export default new UserSocialMediaService();