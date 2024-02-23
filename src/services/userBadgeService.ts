import { BaseService } from "../core/services/baseServices";
import { AddRequestUserBadge } from "../models/requests/userBadge/AddRequestUserBadge";
import { UpdateRequestUserBadge } from "../models/requests/userBadge/UpdateRequestUserBadge";
import { AddResponseUserBadge } from "../models/response/userBadge/AddResponseUserBadge";
import { GetAllUserBadge } from "../models/response/userBadge/GetAllUserBadge";
import { GetByIdUserBadge } from "../models/response/userBadge/GetByIdUserBadge";
import { UpdateResponseUserBadge } from "../models/response/userBadge/UpdateResponseUserBadge";

class UserBadgeService extends BaseService<
    GetAllUserBadge,
    GetByIdUserBadge,
    AddRequestUserBadge,
    AddResponseUserBadge,
    UpdateRequestUserBadge,
    UpdateResponseUserBadge
>{

    constructor() {
        super();
        this.apiUrl = "UserBadges";
    }

}

export default new UserBadgeService();