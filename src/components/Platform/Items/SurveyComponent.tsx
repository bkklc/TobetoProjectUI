import { useState } from "react";
import ResponseData from "../../../hooks/ResponseData";
import surveyService from "../../../services/surveyService";
import { Modal, Row } from "react-bootstrap";

const SurveyComponent = () => {
  const surveyResponse = ResponseData(surveyService.getAll(0,3));
  const [selectedSurvey, setSelectedSurvey] = useState({ name: '', description: '', surveyUrl: ''});

  const handleReadMoreClick = (survey:any) => {
    setSelectedSurvey({
      name: survey.name,
      description: survey.description,
      surveyUrl: survey.url
    });
  };

  const handleCloseModal = () => {
    setSelectedSurvey({ name: '', description: '',surveyUrl: ''});
  };



  return (
    <Row>
      {surveyResponse &&
        surveyResponse.items.slice(0,3).map((survey: any) => (
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
                  Başlangıç Tarihi: {survey.startedDate.split("T")[0]}
                </span>
                <span className="date">Bitiş Tarihi: {survey.endDate.split("T")[0]}</span>
                <span className="read-more" onClick={() => handleReadMoreClick(survey)}>
                  Devamını Oku
                </span>
              </div>
            </div>
          </div>
        ))}
        {selectedSurvey && (
        <Modal
          size="lg"
          show={!!selectedSurvey.name}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">{selectedSurvey.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedSurvey.description}</Modal.Body>
          <Modal.Body>{selectedSurvey.surveyUrl}</Modal.Body>
        </Modal>
      )}
    </Row>
  );
};

export default SurveyComponent;
