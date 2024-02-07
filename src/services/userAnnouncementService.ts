import { BaseService } from "../core/services/baseServices";
import AddRequestUserAnnouncement from "../models/requests/userAnnouncement/AddRequestUserAnnouncement";
import UpdateRequestUserAnnouncement from "../models/requests/userAnnouncement/UpdateRequestUserAnnouncement";
import AddResponseUserAnnouncement from "../models/response/userAnnouncement/AddResponseUserAnnouncement";
import GetAllResponseUserAnnouncement from "../models/response/userAnnouncement/GetAllResponseUserAnnouncement";
import GetByIdResponseUserAnnouncement from "../models/response/userAnnouncement/GetByIdResponseUserAnnouncement";
import UpdateResponseUserAnnouncement from "../models/response/userAnnouncement/UpdateResponseUserAnnouncement";


class UserAnnouncementService extends BaseService<
  GetAllResponseUserAnnouncement,
  GetByIdResponseUserAnnouncement,
  AddRequestUserAnnouncement,
  AddResponseUserAnnouncement,
  UpdateRequestUserAnnouncement,
  UpdateResponseUserAnnouncement
> {
  constructor() {
    super();
    this.apiUrl = "UserAnnouncements";
  }
}

export default new UserAnnouncementService();