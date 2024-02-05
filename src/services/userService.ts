import { BaseService } from "../core/services/baseServices";
import UpdateRequestUser from "../models/requests/user/UpdateRequestUser";
import GetByIdUser from "../models/response/user/GetByIdUser";


class UserService extends BaseService<{},GetByIdUser,{},{},UpdateRequestUser,{}>{

    constructor() {
        super();
        this.apiUrl = "Users";
    }
}

export default new UserService();