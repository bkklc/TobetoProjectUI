import { BaseService } from "../core/services/baseServices";
import AddRequestClassroomGroupCourse from "../models/requests/classroomGroupCourse/AddRequestClassroomGroupCourse";
import UpdateRequestClassroomGroupCourse from "../models/requests/classroomGroupCourse/UpdateRequestClassroomGroupCourse";
import AddResponseClassroomGroupCourse from "../models/response/classroomGroupCourse/AddResponseClassroomGroupCourse";
import GetAllClassroomGroupCourses from "../models/response/classroomGroupCourse/GetAllClassroomGroupCourses";
import GetByIdClassroomGroupCourse from "../models/response/classroomGroupCourse/GetByIdClassroomGroupCourse";
import UpdateResponseClassroomGroupCourse from "../models/response/classroomGroupCourse/UpdateResponseClassroomGroupCourse";

class ClassroomGroupCourseService extends BaseService<
    GetAllClassroomGroupCourses,
    GetByIdClassroomGroupCourse,
    AddRequestClassroomGroupCourse,
    AddResponseClassroomGroupCourse,
    UpdateRequestClassroomGroupCourse,
    UpdateResponseClassroomGroupCourse
>{

    constructor() {
        super();
        this.apiUrl = "ClassroomGroupCourses";
    }

}

export default new ClassroomGroupCourseService();