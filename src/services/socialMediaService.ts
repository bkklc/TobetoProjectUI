import { BaseService } from "../core/services/baseServices";



class SocialMedia extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "SocialMedias";
    }
}

export default new SocialMedia();