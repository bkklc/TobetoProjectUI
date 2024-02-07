import { BaseService } from "../core/services/baseServices";
import { AddRequestSocialMedia } from "../models/requests/socialMedia/addRequestSocialMedia";
import { UpdateRequestSocialMedia } from "../models/requests/socialMedia/updateRequestSocialMedia";
import { AddResponseSocialMedia } from "../models/response/socialMedias/addResponseSocialMedia";
import { GetAllSocialMedia } from "../models/response/socialMedias/getAllSocialMedia";
import { GetByIdSocialMedia } from "../models/response/socialMedias/getByIdSocialMedia";
import { UpdateResponseSocialMedia } from "../models/response/socialMedias/updateResponseSocialMedia";



class SocialMedia extends BaseService<
GetAllSocialMedia,
GetByIdSocialMedia,
AddRequestSocialMedia,
AddResponseSocialMedia,
UpdateRequestSocialMedia,
UpdateResponseSocialMedia>{

    constructor() {
        super();
        this.apiUrl = "SocialMedias";
    }
}

export default new SocialMedia();