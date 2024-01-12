import { Card, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function PlatformTabs() {
  
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="nav nav-tabs mainTablist "
        justify
      >
        <Tab eventKey="home" title="Başvurularım">
          {/* Başvuru Field /Taşınabilir!! */}
          <div className='row'>
            <div className='col-6'>
              <Card className='status-card status_accepted'>
                <span className="form_name">İstanbul Kodluyor</span>
                <span className="form_status"></span>
                <span className="pull_back"></span>
                <span className="form_name">Bilgilendirme</span>
                <div>
                <div style={ {display: "flex", alignItems:"center"}}>
                  <i className="fa fa-check fa-sm" aria-hidden="true" style={{color:"green", marginRight:"5px" }} data-darkreader-inline-color=""></i>
                  <span className="form_date"> İstanbul Kodluyor Başvuru Formu onaylandı.</span>
                  </div>
                  <div style={ {display: "flex", alignItems:"center"}}>
                  <i className="fa fa-check fa-sm" aria-hidden="true" style={{color:"green", marginRight:"5px" }} data-darkreader-inline-color=""></i>
                  <span className="form_date"> İstanbul Kodluyor Belge Yükleme Formu onaylandı.</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </Tab>
        <Tab eventKey="profile" title="Eğitimlerim">
          Tab content for Profile
        </Tab>
        <Tab eventKey="longer-tab" title="Duyuru ve Haberlerim">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Anketlerim">
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>

  );
}

export default PlatformTabs;

