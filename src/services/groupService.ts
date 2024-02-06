import { BaseService } from "../core/services/baseServices";
import AddRequestGroup from "../models/requests/group/AddRequestGroup";
import UpdateRequestGroup from "../models/requests/group/UpdateRequestGroup";
import AddResponseGroup from "../models/response/group/AddResponseGroup";
import GetAllGroup from "../models/response/group/GetAllGroup";
import GetByIdGroup from "../models/response/group/GetByIdGroup";
import UpdateResponseGroup from "../models/response/group/UpdateResponseGroup";


class GroupService extends BaseService<
GetAllGroup,GetByIdGroup,AddRequestGroup,AddResponseGroup,UpdateRequestGroup,UpdateResponseGroup>{

    constructor() {
        super();
        this.apiUrl = "Groups";
    }
}

export default new GroupService();