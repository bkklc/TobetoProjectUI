import { BaseService } from "../core/services/baseServices";



class ProgrammingLanguage extends BaseService<{},{},{},{},{},{}>{

    constructor() {
        super();
        this.apiUrl = "ProgrammingLanguages";
    }
}

export default new ProgrammingLanguage();