import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import AddRequestClassroomGroupCourse from "../models/requests/classroomGroupCourse/AddRequestClassroomGroupCourse";
import UpdateRequestClassroomGroupCourse from "../models/requests/classroomGroupCourse/UpdateRequestClassroomGroupCourse";
import AddResponseClassroomGroupCourse from "../models/response/classroomGroupCourse/AddResponseClassroomGroupCourse";
import GetAllClassroomGroupCourses from "../models/response/classroomGroupCourse/GetAllClassroomGroupCourses";
import GetByIdClassroomGroupCourse from "../models/response/classroomGroupCourse/GetByIdClassroomGroupCourse";
import UpdateResponseClassroomGroupCourse from "../models/response/classroomGroupCourse/UpdateResponseClassroomGroupCourse";
import Paginate from "../models/paginate";
import axiosInstance from "../core/interceptors/axiosInterceptor";

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

    GetListByClassroomGroupId(classroomGroupId: any): Promise<AxiosResponse<Paginate<GetAllClassroomGroupCourses>, any>> {
		return axiosInstance.get<Paginate<GetAllClassroomGroupCourses>>(this.apiUrl + "/GetListByClassroomGroupId?classroomGroupId=" + classroomGroupId + "&PageIndex=0&PageSize=20");
	}
}

export default new ClassroomGroupCourseService();