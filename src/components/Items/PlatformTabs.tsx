import { Card, Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function PlatformTabs() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="applications"
        id="justify-tab-example"
        className="nav nav-tabs mainTablist "
        justify
      >
        <Tab eventKey="applications" title="Başvurularım">
          {/* Başvuru Field /Taşınabilir!! */}
          <Row>
            <Col md={6}>
              <Card className="status-card status_accepted">
                <span className="form_name">İstanbul Kodluyor</span>
                <span className="form_status"></span>
                <span className="pull_back"></span>
                <span className="form_name">Bilgilendirme</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fa fa-check fa-sm"
                      aria-hidden="true"
                      style={{ color: "green", marginRight: "5px" }}
                      data-darkreader-inline-color=""
                    ></i>
                    <span className="form_date">
                      {" "}
                      İstanbul Kodluyor Başvuru Formu onaylandı.
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fa fa-check fa-sm"
                      aria-hidden="true"
                      style={{ color: "green", marginRight: "5px" }}
                      data-darkreader-inline-color=""
                    ></i>
                    <span className="form_date">
                      {" "}
                      İstanbul Kodluyor Belge Yükleme Formu onaylandı.
                    </span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="courses" title="Eğitimlerim">
          <div className="col-md-3 col-12 mb-4">
            <div className="corp-edu-card">
              <div
                className="card-img"
                style={{
                  backgroundImage:
                    'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                }}
              />
              <div className="card-content">
                <div className="d-flex flex-column">
                  <span>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</span>
                  <span className="platform-course-date">
                    21 Eylül 2023 15:20
                  </span>
                </div>
                <a className="apply-btn">Eğitime Git</a>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="announcements" title="Duyuru ve Haberlerim">
          <div className="row">
            <div className="col-md-4 col-12 my-4">
              <div className="notfy-card notify">
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between mb-4">
                    <span className="type">Duyuru</span>
                    <span className="corp-names type">İstanbul Kodluyor</span>
                  </div>
                  <span className="header ">
                    Ocak Ayı Tercih Formu Bilgilendirmesi
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="date">12.01.2024</span>
                  <span className="read-more">Devamını Oku</span>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="surveys" title="Anketlerim">
          <div className=" noDataCard">
            <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default PlatformTabs;
