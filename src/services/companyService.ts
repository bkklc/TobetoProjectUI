import { BaseService } from "../core/services/baseServices";


class CompanyService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "Companies";
    }
}

export default new CompanyService();
