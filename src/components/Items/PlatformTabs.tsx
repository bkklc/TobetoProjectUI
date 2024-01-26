import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AnnouncementsComponent from "./AnnouncementsComponent";
import ApplicationsComponent from "./ApplicationsComponent";
import EducationComponent from "./EducationComponent";
import SurveyComponent from "./SurveyComponent";




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
          <ApplicationsComponent />
        </Tab>
        <Tab eventKey="courses" title="Eğitimlerim">
          <EducationComponent />
        </Tab>

        <Tab eventKey="announcements" title="Duyuru ve Haberlerim">
          <AnnouncementsComponent />
        </Tab>
        <Tab eventKey="surveys" title="Anketlerim">
          <SurveyComponent />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default PlatformTabs;
