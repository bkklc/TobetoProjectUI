import { Row, Col, Badge, Button } from "react-bootstrap";
import ActivityMap from "./ActivityMap";
import { Link } from "react-router-dom";

const ProfileRight = () => {
  return (
    
    <Col md={8} xs={12}>
      <div className="d-flex justify-content-end">
      <span className="cv-share-icon dropdown-toggle btn btn-primary" />
      <div className="dropdown">
      <Link
          to="/profilimi-duzenle/kisisel-bilgilerim"
          type="button"
          id="dropdown-basic"
          aria-expanded="false"
          className="cv-edit-icon"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          {/* Buton içeriği */}
        </Link>
        {/* Dropdown içeriği buraya eklenebilir */}
      </div>
    </div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto İşte Başarı Modelim</span>
            <span className="cv-see-icon"></span>
          </div>
          <hr />
        </div>
        <div className="model-padding">
          <Row>
            <Col md={6} xs={12} className="my-3">
              <canvas
                height="480"
                width="668"
                style={{ display: "block", height: "240px", width: "334px" }}
                className="chartjs-render-monitor"
              ></canvas>
            </Col>
            <Col md={6} xs={12} className="d-flex my-3">
              <div className="radar-labels">
                <Badge bg="info">4.4</Badge>
                <span className="legendName">Yeni dünyaya hazırlanıyorum</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto Seviye Testlerim</span>
          </div>
          <hr />
        </div>
        <Row className="g-4">
          <div className="envantoryList">
            <div className=" envantory-result">
              <div className="d-flex justify-content-between w-100">
                <span className="examName">Front End</span>
                <span className="examTime">04-09-2023</span>
              </div>
              <span className="examResult">80.00</span>
            </div>
            <div className=" envantory-result">
              <div className="d-flex justify-content-between w-100">
                <span className="examName">
                  Herkes için Kodlama 1C Değerlendirme Sınavı
                </span>
                <span className="examTime">11-10-2023</span>
              </div>
              <span className="examResult">92.00</span>
            </div>
          </div>
        </Row>
      </div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Yetkinlik Rozetlerim</span>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-start badge-container">
          <Badge className="badge-card">
            <img className="img-fluid" alt="" />
          </Badge>
          <Badge className="badge-card">
            <img
              className="img-fluid"
              src="https://tobeto.s3.cloud.ngn.com.tr/47_7fc3123c74.jpg"
              alt=""
            />
          </Badge>
        </div>
      </div>
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Aktivite Haritam</span>
          </div>
          <hr />
          <ActivityMap />
        </div>
      </div>
    </Col>
  );
};

export default ProfileRight;
