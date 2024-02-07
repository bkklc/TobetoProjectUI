import { BaseService } from "../core/services/baseServices";



class SchoolName extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "SchoolNames";
    }
}

export default new SchoolName();