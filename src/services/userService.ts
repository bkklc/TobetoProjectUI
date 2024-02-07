import { BaseService } from "../core/services/baseServices";
import AddRequestUser from "../models/requests/user/AddRequestUser";
import UpdateRequestUser from "../models/requests/user/UpdateRequestUser";
import AddResponseUser from "../models/response/user/AddResponseUser";
import GetAllResponseUser from "../models/response/user/GetAllResponseUser";
import GetByIdResponseUser from "../models/response/user/GetByIdResponseUser";
import UpdateResponseUser from "../models/response/user/UpdateResponseUser";

class UserService extends BaseService<
  GetAllResponseUser,
  GetByIdResponseUser,
  AddRequestUser,
  AddResponseUser,
  UpdateRequestUser,
  UpdateResponseUser
> {
  constructor() {
    super();
    this.apiUrl = "Users";
  }
}

export default new UserService();
