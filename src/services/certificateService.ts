import { BaseService } from "../core/services/baseServices";
import AddRequestCertificate from "../models/requests/certificate/AddRequestCertificate";
import UpdateRequestCertificate from "../models/requests/certificate/UpdateRequestCertificate";
import AddResponseCertificate from "../models/response/certificate/AddResponseCertificate";
import GetAllCertificate from "../models/response/certificate/GetAllCertificate";
import GetByIdCertificate from "../models/response/certificate/GetByIdCertificate";
import UpdateResponseCertificate from "../models/response/certificate/UpdateResponseCertificate";

class CertificateService extends BaseService<
    GetAllCertificate,
    GetByIdCertificate,
    AddRequestCertificate,
    AddResponseCertificate,
    UpdateRequestCertificate,
    UpdateResponseCertificate
>{

    constructor() {
        super();
        this.apiUrl = "Certificates";
    }

}

export default new CertificateService();