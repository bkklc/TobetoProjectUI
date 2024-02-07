import { BaseService } from "../core/services/baseServices";
import AddRequestImage from "../models/requests/image/AddRequestImage";
import UpdateRequestImage from "../models/requests/image/UpdateRequestImage";
import AddResponseImage from "../models/response/image/AddResponseImage";
import GetAllImage from "../models/response/image/GetAllImage";
import GetByIdImage from "../models/response/image/GetByIdImage";
import UpdateResponseImage from "../models/response/image/UpdateResponseImage";

class imageService extends BaseService<
GetAllImage,GetByIdImage,AddRequestImage,AddResponseImage,UpdateRequestImage,UpdateResponseImage>{

    constructor() {
        super();
        this.apiUrl = "Images";
    }
}

export default new imageService();