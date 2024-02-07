import { BaseService } from "../core/services/baseServices";

class CourseInstructorService extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "CourseInstructorsService";
    }
}

export default new CourseInstructorService();
