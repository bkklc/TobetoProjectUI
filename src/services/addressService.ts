import { BaseService } from "../core/services/baseServices";
import AddRequestAddress from "../models/requests/address/AddRequestAddress";
import UpdateRequestAddress from "../models/requests/address/UpdateRequestAddress";
import AddResponseAddress from "../models/response/address/AddResponseAddress";
import GetAllAddress from "../models/response/address/GetAllAddress";
import GetByIdAddress from "../models/response/address/GetByIdAddress";
import UpdateResponseAddress from "../models/response/address/UpdateResponseAddress";

class AddressService extends BaseService<
    GetAllAddress,
    GetByIdAddress,
    AddRequestAddress,
    AddResponseAddress,
    UpdateRequestAddress,
    UpdateResponseAddress
>{

    constructor() {
        super();
        this.apiUrl = "Addresses";
    }

}

export default new AddressService();