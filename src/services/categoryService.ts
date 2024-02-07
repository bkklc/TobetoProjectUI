import { BaseService } from "../core/services/baseServices";
import AddRequestCategory from "../models/requests/category/AddRequestCategory";
import UpdateRequestCategory from "../models/requests/category/UpdateRequestCategory";
import AddResponseCategory from "../models/response/category/AddResponseCategory";
import GetAllCategory from "../models/response/category/GetAllCategory";
import GetByIdCategory from "../models/response/category/GetByIdCategory";
import UpdateResponseCategory from "../models/response/category/UpdateResponseCategory";

class CategoryService extends BaseService<
    GetAllCategory,
    GetByIdCategory,
    AddRequestCategory,
    AddResponseCategory,
    UpdateRequestCategory,
    UpdateResponseCategory
>{

    constructor() {
        super();
        this.apiUrl = "Categories";
    }

}

export default new CategoryService();