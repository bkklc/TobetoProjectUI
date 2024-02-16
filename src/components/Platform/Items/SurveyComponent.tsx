import ResponseData from "../../../hooks/ResponseData";
import surveyService from "../../../services/surveyService";
import { Row } from "react-bootstrap";

const SurveyComponent = () => {
  const surveyResponse = ResponseData(surveyService.getAll());
  return (
    <Row>
      {surveyResponse &&
        surveyResponse.items.map((survey: any) => (
          // <div className=" noDataCard">
          //   <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
          // </div>

          <div key={survey.id} className="col-md-4 col-12 my-4">
            <div className="notfy-card notify">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-4">
                  <span className="type">Anket</span>
                  <span className="corp-names type">İstanbul Kodluyor</span>
                </div>
                <span>{survey.name}</span>
              </div>
              <div className="d-flex-direction-column">
                <span className="date">
                  Başlangıç Tarihi: {survey.startedDate}
                </span>
                <span className="date">Bitiş Tarihi: {survey.endDate}</span>
                <span className="read-more">Devamını Oku</span>
              </div>
            </div>
          </div>
        ))}
    </Row>
  );
};

export default SurveyComponent;
