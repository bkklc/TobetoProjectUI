import { BaseService } from "../core/services/baseServices";


class CourseCategoryService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "CourseCategories";
    }
}

export default new CourseCategoryService();
