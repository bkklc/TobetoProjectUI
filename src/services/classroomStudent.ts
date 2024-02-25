import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import AddRequestClassroomStudent from "../models/requests/classroomStudent/AddRequestClassroomStudent";
import UpdateRequestClassroomStudent from "../models/requests/classroomStudent/UpdateRequestClassroomStudent";
import AddResponseClassroomStudent from "../models/response/classroomStudent/AddResponseClassroomStudent";
import GetAllClassroomStudents from "../models/response/classroomStudent/GetAllClassroomStudents";
import GetByIdClassroomStudent from "../models/response/classroomStudent/GetByIdClassroomStudent";
import UpdateResponseClassroomStudent from "../models/response/classroomStudent/UpdateResponseClassroomStudent";
import Paginate from "../models/paginate";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class ClassroomStudent extends BaseService<
    GetAllClassroomStudents,
    GetByIdClassroomStudent,
    AddRequestClassroomStudent,
    AddResponseClassroomStudent,
    UpdateRequestClassroomStudent,
    UpdateResponseClassroomStudent
>{

    constructor() {
        super();
        this.apiUrl = "ClassroomStudents";
    }

    GetListByStudentId(studentId: any): Promise<AxiosResponse<Paginate<GetAllClassroomStudents>, any>> {
		return axiosInstance.get<Paginate<GetAllClassroomStudents>>(this.apiUrl + "/GetListByStudentId?studentId=" + studentId + "&PageIndex=0&PageSize=20");
	}
}

export default new ClassroomStudent();