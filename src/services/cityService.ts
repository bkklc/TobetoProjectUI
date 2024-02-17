import { BaseService } from "../core/services/baseServices";
import AddRequestCity from "../models/requests/city/AddRequestCity";
import UpdateRequestCity from "../models/requests/city/UpdateRequestCity";
import AddResponseCity from "../models/response/city/AddResponseCity";
import GetAllCities from "../models/response/city/GetAllCities";
import GetByIdCity from "../models/response/city/GetByIdCity";
import UpdateResponseCity from "../models/response/city/UpdateResponseCity";

class CityService extends BaseService<
    GetAllCities,
    GetByIdCity,
    AddRequestCity,
    AddResponseCity,
    UpdateRequestCity,
    UpdateResponseCity
>{

    constructor() {
        super();
        this.apiUrl = "Cities";
    }
}

export default new CityService();