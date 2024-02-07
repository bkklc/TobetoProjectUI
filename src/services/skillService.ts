import { BaseService } from "../core/services/baseServices";



class Skill extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "Skills";
    }
}

export default new Skill();