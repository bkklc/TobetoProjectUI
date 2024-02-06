import { BaseService } from "../core/services/baseServices";
import AddRequestUserSocialMedia from "../models/requests/userSocialMedia/AddRequestUserSocialMedia";
import UpdateRequestUserSocialMedia from "../models/requests/userSocialMedia/UpdateRequestUserSocialMedia";
import AddResponseUserSocialMedia from "../models/response/userSocialMedia/AddResponseUserSocialMedia";
import GetAllUserSocialMedia from "../models/response/userSocialMedia/GetAllUserSocialMedia";
import GetByIdUserSocialMedia from "../models/response/userSocialMedia/GetByIdUserSocialMedia";
import UpdateResponseUserSocialMedia from "../models/response/userSocialMedia/UpdateResponseUserSocialMedia";

class UserSocialMediaService extends BaseService<GetAllUserSocialMedia,GetByIdUserSocialMedia,AddRequestUserSocialMedia,AddResponseUserSocialMedia,UpdateRequestUserSocialMedia,UpdateResponseUserSocialMedia>{

    constructor() {
        super();
        this.apiUrl = "UserSocialMedias";
    }
}

export default new UserSocialMediaService();