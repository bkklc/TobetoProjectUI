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
        Başvurularım
      </Tab>
      <Tab eventKey="profile" title="Eğitimlerim">
        Eğitimlerim
      </Tab>
      <Tab eventKey="longer-tab" title="Duyuru ve Haberlerim">
        Duyuru ve Haberlerim
      </Tab>
      <Tab eventKey="contact" title="Anketlerim">
        Anketlerim
      </Tab>
    </Tabs>
    </Container>
    
  );
}

export default PlatformTabs;