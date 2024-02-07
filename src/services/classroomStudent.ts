import { BaseService } from "../core/services/baseServices";
import AddRequestClassroomStudent from "../models/requests/classroomStudent/AddRequestClassroomStudent";
import UpdateRequestClassroomStudent from "../models/requests/classroomStudent/UpdateRequestClassroomStudent";
import AddResponseClassroomStudent from "../models/response/classroomStudent/AddResponseClassroomStudent";
import GetAllClassroomStudents from "../models/response/classroomStudent/GetAllClassroomStudents";
import GetByIdClassroomStudent from "../models/response/classroomStudent/GetByIdClassroomStudent";
import UpdateResponseClassroomStudent from "../models/response/classroomStudent/UpdateResponseClassroomStudent";

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

}

export default new ClassroomStudent();