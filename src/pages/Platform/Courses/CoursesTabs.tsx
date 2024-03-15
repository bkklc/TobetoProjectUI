
import { Container, Tab, Tabs } from 'react-bootstrap';
import EducationComponent from '../../../components/Platform/Items/EducationComponent';

function CoursesTabs() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="applications"
        id="justify-tab-example"
        className="nav nav-tabs mainTablist "
        justify
      >
        <Tab eventKey="applications" title="Tüm Eğitimlerim">
          <EducationComponent pageSize={20} />
        </Tab>
        <Tab eventKey="courses" title="Devam Ettiklerim">
          <EducationComponent pageSize={20} />
        </Tab>
        <Tab eventKey="announcements" title="Tamamladıklarım">
          <EducationComponent pageSize={20} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default CoursesTabs;
