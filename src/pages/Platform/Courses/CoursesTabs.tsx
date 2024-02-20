import React from 'react'
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
            <EducationComponent />
          </Tab>
          <Tab eventKey="courses" title="Devam Ettiklerim">
            <EducationComponent />
          </Tab>
          <Tab eventKey="announcements" title="Tamamladıklarım">
            <EducationComponent />
          </Tab>
        </Tabs>
      </Container>
    );
  }
  
  export default CoursesTabs;
