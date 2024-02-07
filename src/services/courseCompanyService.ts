import { BaseService } from "../core/services/baseServices";


class CourseCompanyService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "CourseCompanies";
    }
}

export default new CourseCompanyService();