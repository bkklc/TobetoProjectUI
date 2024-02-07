import { BaseService } from "../core/services/baseServices";
import AddRequestCourseSubType from "../models/requests/courseSubType/AddRequestCourseSubType";
import UpdateRequestCourseSubType from "../models/requests/courseSubType/UpdateRequestCourseSubType";
import AddResponseCourseSubType from "../models/response/courseSubType/AddResponseCourseSubType";
import GetAllCourseSubType from "../models/response/courseSubType/GetAllCourseSubType";
import GetByIdCourseSubType from "../models/response/courseSubType/GetByIdCourseSubType";
import UpdateResponseCourseSubType from "../models/response/courseSubType/UpdateResponseCourseSubType";

class CourseSubTypeService extends BaseService<GetAllCourseSubType,GetByIdCourseSubType,AddRequestCourseSubType,AddResponseCourseSubType,UpdateRequestCourseSubType,UpdateResponseCourseSubType>{

    constructor() {
        super();
        this.apiUrl = "CourseSubTypes";
    }
}

export default new CourseSubTypeService();