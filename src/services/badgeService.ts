import { BaseService } from "../core/services/baseServices";
import { AddRequestBadge } from "../models/requests/badge/AddRequestBadge";
import { UpdateRequestBadge } from "../models/requests/badge/UpdateRequestBadge";
import { AddResponseBadge } from "../models/response/badge/AddResponseBadge";
import { GetAllBadge } from "../models/response/badge/GetAllBadge";
import { GetByIdBadge } from "../models/response/badge/GetByIdBadge";
import { UpdateResponseBadge } from "../models/response/badge/UpdateResponseBadge";

class BadgeService extends BaseService<
    GetAllBadge,
    GetByIdBadge,
    AddRequestBadge,
    AddResponseBadge,
    UpdateRequestBadge,
    UpdateResponseBadge
>{

    constructor() {
        super();
        this.apiUrl = "Badges";
    }

}

export default new BadgeService();