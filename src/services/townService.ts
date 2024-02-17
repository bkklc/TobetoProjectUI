import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor.ts";
import { BaseService } from "../core/services/baseServices";
import Paginate from "../models/paginate.ts";
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

  getByCityId(townId: any): Promise<AxiosResponse<Paginate<GetAllResponseTown>, any>> {
    return axiosInstance.get<Paginate<GetAllResponseTown>>(this.apiUrl + "/getByCityId?cityId=" + townId + "&PageIndex=0&PageSize=81")
  }
}

export default new TownService();
