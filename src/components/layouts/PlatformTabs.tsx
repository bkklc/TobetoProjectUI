import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function PlatformTabs() {
  return (
    <Container>
      <Tabs
      defaultActiveKey="profile"
      id="myTab"
      className="nav nav-tabs mainTablist "
      justify
    >
      <Tab eventKey="home" title="Başvurularım">
        Tab content for Home
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