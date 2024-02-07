import { BaseService } from "../core/services/baseServices";
import AddRequestAnnouncement from "../models/requests/announcement/AddRequestAnnouncement";
import UpdateRequestAnnouncement from "../models/requests/announcement/UpdateRequestAnnouncement";
import AddResponseAnnouncement from "../models/response/Announcement/AddResponseAnnouncement";
import GetAllAnnouncement from "../models/response/Announcement/GetAllAnnouncement";
import GetByIdAnnouncement from "../models/response/Announcement/GetByIdAnnouncement";
import UpdateResponseAnnouncement from "../models/response/Announcement/UpdateResponseAnnouncement";

class AnnouncementService extends BaseService<
    GetAllAnnouncement,
    GetByIdAnnouncement,
    AddRequestAnnouncement,
    AddResponseAnnouncement,
    UpdateRequestAnnouncement,
    UpdateResponseAnnouncement
>{

    constructor() {
        super();
        this.apiUrl = "Announcements";
    }

}

export default new AnnouncementService();