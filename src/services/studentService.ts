import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import { AddRequestStudent } from "../models/requests/student/addRequestStudent";
import { UpdateRequestStudent } from "../models/requests/student/updateRequestStudent";
import { AddResponseStudent } from "../models/response/student/addResponseStudent";
import { GetAllStudent } from "../models/response/student/getAllStudent";
import { GetByIdStudent } from "../models/response/student/getByIdStudent";
import { UpdateResponseStudent } from "../models/response/student/updateResponseStudent";
import axiosInstance from "../core/interceptors/axiosInterceptor";



class Student extends BaseService<
GetAllStudent,
GetByIdStudent,
AddRequestStudent,
AddResponseStudent,
UpdateRequestStudent,
UpdateResponseStudent>{

    constructor() {
        super();
        this.apiUrl = "Students";
    }

    getByUserId(userId: any): Promise<AxiosResponse<GetAllStudent, any>> {
		return axiosInstance.get<GetAllStudent>(this.apiUrl + "/getByUserId?id=" + userId + "&PageIndex=0&PageSize=20");
	}
}

export default new Student();