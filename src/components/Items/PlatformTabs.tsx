import { Card, Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
              <Card className='status-card status_accepted'>
                <span className="form_name">İstanbul Kodluyor</span>
                <span className="form_status"></span>
                <span className="pull_back"></span>
                <span className="form_name">Bilgilendirme</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i className="fa fa-check fa-sm" aria-hidden="true" style={{ color: "green", marginRight: "5px" }} data-darkreader-inline-color=""></i>
                    <span className="form_date"> İstanbul Kodluyor Başvuru Formu onaylandı.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i className="fa fa-check fa-sm" aria-hidden="true" style={{ color: "green", marginRight: "5px" }} data-darkreader-inline-color=""></i>
                    <span className="form_date"> İstanbul Kodluyor Belge Yükleme Formu onaylandı.</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>


        </Tab>
        <Tab eventKey="courses" title="Eğitimlerim">
          Tab content for Profile
        </Tab>
        <Tab eventKey="announcements" title="Duyuru ve Haberlerim">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="surveys" title="Anketlerim">
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>

  );
}

export default PlatformTabs;

