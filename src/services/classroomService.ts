import { BaseService } from "../core/services/baseServices";
import AddRequestClassroom from "../models/requests/classroom/AddRequestClassroom";
import UpdateRequestClassroom from "../models/requests/classroom/UpdateRequestClassroom";
import AddResponseClassroom from "../models/response/classroom/AddResponseClassroom";
import GetAllClassrooms from "../models/response/classroom/GetAllClassrooms";
import GetByIdClassroom from "../models/response/classroom/GetByIdClassroom";
import UpdateResponseClassroom from "../models/response/classroom/UpdateResponseClassroom";

class ClassroomService extends BaseService<
    GetAllClassrooms,
    GetByIdClassroom,
    AddRequestClassroom,
    AddResponseClassroom,
    UpdateRequestClassroom,
    UpdateResponseClassroom
>{

    constructor() {
        super();
        this.apiUrl = "Classrooms";
    }

}

export default new ClassroomService();