import { Row, Modal } from "react-bootstrap";
import announcementService from "../../../services/announcementService";
import { useEffect, useState } from "react";
import Paginate from "../../../models/paginate";
import GetAllAnnouncement from "../../../models/response/Announcement/GetAllAnnouncement";

interface Props {
  pageSize: any;
}

const AnnouncementsComponent = (props: Props) => {


  const [selectedAnnouncement, setSelectedAnnouncement] = useState({ name: '', description: '' });
  const [announcement, setAnnouncement] = useState<Paginate<GetAllAnnouncement>>({ items: [] })

  const fetchData = async () => {
    try {
      await announcementService.getAll(0, props.pageSize).then(
        (res) => {
          if (res.status === 200) {
            res.data.items.sort((a, b) => {
              return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
            })
            setAnnouncement(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const handleReadMoreClick = (announcement: any) => {
    setSelectedAnnouncement({
      name: announcement.name,
      description: announcement.description
    });
  };

  const handleCloseModal = () => {
    setSelectedAnnouncement({ name: '', description: '' });
  };


  useEffect(() => {
    fetchData();
  }, [])
  return (
    <Row>
      {
        announcement.items.map((announcement: any) => (
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
                <span className="date">{announcement.createdDate.split("T")[0]}</span>
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
          show={!!selectedAnnouncement.name}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">{selectedAnnouncement.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ whiteSpace: 'pre-line' }}>
              {selectedAnnouncement.description}
            </div>

          </Modal.Body>
        </Modal>
      )}
    </Row>
  );
};

export default AnnouncementsComponent;
