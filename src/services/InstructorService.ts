import { BaseService } from "../core/services/baseServices";
import AddRequestInstructor from "../models/requests/instructor/AddRequestInstructor";
import UpdateRequestInstructor from "../models/requests/instructor/UpdateRequestInstructor";
import AddResponseInstructor from "../models/response/instructor/AddResponseInstructor";
import GetAllInstructor from "../models/response/instructor/GetAllInstructor";
import GetByIdInstructor from "../models/response/instructor/GetByIdInstructor";
import UpdateResponseInstructor from "../models/response/instructor/UpdateResponseInstructor";



class InstructorService extends BaseService<
GetAllInstructor,GetByIdInstructor,AddRequestInstructor,AddResponseInstructor,UpdateRequestInstructor,UpdateResponseInstructor>{

    constructor() {
        super();
        this.apiUrl = "Instructors";
    }
}
    
export default new InstructorService();