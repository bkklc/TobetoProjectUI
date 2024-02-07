import { BaseService } from "../core/services/baseServices";
import AddRequestCourse from "../models/requests/course/AddRequestCourse";
import UpdateRequestCourse from "../models/requests/course/UpdateRequestCourse";
import AddResponseCourse from "../models/response/course/AddResponseCourse";
import GetAllCourse from "../models/response/course/GetAllCourse";
import UpdateResponseCourse from "../models/response/course/UpdateResponseCourse";
import GetByIdGroup from "../models/response/group/GetByIdGroup";

class CourseService extends BaseService<GetAllCourse,GetByIdGroup,AddRequestCourse,AddResponseCourse,UpdateRequestCourse,UpdateResponseCourse>{

    constructor() {
        super();
        this.apiUrl = "Courses";
    }
}

export default new CourseService();