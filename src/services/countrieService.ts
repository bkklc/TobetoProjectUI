import { BaseService } from "../core/services/baseServices";


class CountrieService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "Countries";
    }
}

export default new CountrieService();

