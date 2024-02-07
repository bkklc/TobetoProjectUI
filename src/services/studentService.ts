import { BaseService } from "../core/services/baseServices";



class Student extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "Students";
    }
}

export default new Student();