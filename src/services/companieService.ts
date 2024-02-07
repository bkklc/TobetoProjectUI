import { BaseService } from "../core/services/baseServices";


class CompanieService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "Companies";
    }
}

export default new CompanieService();
