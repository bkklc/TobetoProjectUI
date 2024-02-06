import { BaseService } from "../core/services/baseServices";
import AddRequestClassroomGroup from "../models/requests/classroomGroup/AddRequestClassroomGroup";
import UpdateRequestClassroomGroup from "../models/requests/classroomGroup/UpdateRequestClassroomGroup";
import AddResponseClassroomGroup from "../models/response/classroomGroup/AddResponseClassroomGroup";
import GetAllClassroomGroups from "../models/response/classroomGroup/GetAllClassroomGroups";
import GetByIdClassroomGroup from "../models/response/classroomGroup/GetByIdClassroomGroup";
import UpdateResponseClassroomGroup from "../models/response/classroomGroup/UpdateResponseClassroomGroup";

class ClassroomGroupService extends BaseService<
    GetAllClassroomGroups,
    GetByIdClassroomGroup,
    AddRequestClassroomGroup,
    AddResponseClassroomGroup,
    UpdateRequestClassroomGroup,
    UpdateResponseClassroomGroup
>{

    constructor() {
        super();
        this.apiUrl = "ClassroomGroups";
    }

}

export default new ClassroomGroupService();