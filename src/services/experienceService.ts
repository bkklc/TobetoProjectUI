import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseServices";
import AddRequestExperience from "../models/requests/experience/AddRequestExperience";
import UpdateRequestExperience from "../models/requests/experience/UpdateRequestExperience";
import AddResponseExperience from "../models/response/experience/AddResponseExperience";
import GetAllExperience from "../models/response/experience/GetAllExperience";
import GetByIdExperience from "../models/response/experience/GetByIdExperience";
import UpdateResponseExperience from "../models/response/experience/UpdateResponseExperience";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import Paginate from "../models/paginate";

class ExperienceService extends BaseService<
    GetAllExperience,
    GetByIdExperience,
    AddRequestExperience,
    AddResponseExperience,
    UpdateRequestExperience,
    UpdateResponseExperience
>{

    constructor() {
        super();
        this.apiUrl = "Experiences";
    }

    getByUserId(userId: any): Promise<AxiosResponse<Paginate<GetAllExperience>, any>> {
		return axiosInstance.get<Paginate<GetAllExperience>>(this.apiUrl + "/getByUserId?userId=" + userId + "&PageIndex=0&PageSize=20");
	}
}

export default new ExperienceService();