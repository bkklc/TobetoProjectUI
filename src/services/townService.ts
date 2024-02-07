import { BaseService } from "../core/services/baseServices";
import AddRequestTown from "../models/requests/town/AddRequestTown";
import UpdateRequestTown from "../models/requests/town/UpdateRequestTown.tsx";
import AddResponseTown from "../models/response/town/AddResponseTown";
import GetAllResponseTown from "../models/response/town/GetAllResponseTown";
import GetByIdResponseTown from "../models/response/town/GetByIdResponseTown";
import UpdateResponseTown from "../models/response/town/UpdateResponseTown";

class TownService extends BaseService<
  GetAllResponseTown,
  GetByIdResponseTown,
  AddRequestTown,
  AddResponseTown,
  UpdateRequestTown,
  UpdateResponseTown
> {
  constructor() {
    super();
    this.apiUrl = "Towns";
  }
}

export default new TownService();
