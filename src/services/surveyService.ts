import { BaseService } from "../core/services/baseServices";
import AddRequestSurvey from "../models/requests/surveys/AddRequestSurvey";

import UpdateRequestSurvey from "../models/requests/surveys/UpdateRequestSurvey";
import AddResponseSurvey from "../models/response/surveys/AddResponseSurvey";
import GetAllResponseSurvey from "../models/response/surveys/GetAllResponseSurvey";
import GetByIdResponseSurvey from "../models/response/surveys/GetByIdResponseSurvey";
import UpdateResponseSurvey from "../models/response/surveys/UpdateResponseSurvey";

class SurveyService extends BaseService<
  GetAllResponseSurvey,
  GetByIdResponseSurvey,
  AddRequestSurvey,
  AddResponseSurvey,
  UpdateRequestSurvey,
  UpdateResponseSurvey
> {
  constructor() {
    super();
    this.apiUrl = "Surveys";
  }
}

export default new SurveyService();
