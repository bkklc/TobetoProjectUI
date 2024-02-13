import { Row, Modal } from "react-bootstrap";
import announcementService from "../../../services/announcementService";
import ResponseData from "../../../hooks/ResponseData";
import { useState } from "react";
import GetAllAnnouncement from "../../../models/response/Announcement/GetAllAnnouncement";

const AnnouncementsComponent =  () => {
  
  const announcementResponse =  ResponseData(announcementService.getAll());
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<GetAllAnnouncement>(
    {
      Id:0,
      Name:"",
      Description:""

    }

  );

  const handleReadMoreClick = (announcement:any) => {
    setSelectedAnnouncement(announcement);
  };

  const handleCloseModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <Row>
      {announcementResponse &&
        announcementResponse.items.map((announcement:any) => (
          <div className="col-md-4 col-12 my-4" key={announcement.id}>
            <div className="notfy-card notify">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-4">
                  <span className="type">Duyuru</span>
                  <span className="corp-names type">İstanbul Kodluyor</span>
                </div>
                <span className="header">{announcement.name}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="date">12.01.2024</span>
                <span className="read-more" onClick={() => handleReadMoreClick(announcement)}>
                  Devamını Oku
                </span>
              </div>
            </div>
          </div>
        ))}
      {selectedAnnouncement && (
        <Modal
          size="lg"
          show={!!selectedAnnouncement}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">{selectedAnnouncement.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedAnnouncement.description}</Modal.Body>
        </Modal>
      )}
    </Row>
  );
};

export default AnnouncementsComponent;
