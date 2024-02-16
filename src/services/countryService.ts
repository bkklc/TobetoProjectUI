import { BaseService } from "../core/services/baseServices";
import AddRequestCountry from "../models/requests/country/AddRequestCountry";
import UpdateRequestCountry from "../models/requests/country/UpdateRequestCountry";
import { AddCountryResponse } from "../models/response/country/AddCountryResponse";
import { GetAllCountryResponse } from "../models/response/country/GetAllCountryResponse";
import { GetByIdCountryResponse } from "../models/response/country/GetByIdCountryResponse";
import { UpdateCountryResponse } from "../models/response/country/UpdateCountryResponse";


class CountryService extends BaseService<
GetAllCountryResponse,
GetByIdCountryResponse,
AddRequestCountry,
AddCountryResponse,
UpdateRequestCountry,
UpdateCountryResponse
>{

    constructor() {
        super();
        this.apiUrl = "Countries";
    }
}

export default new CountryService();

