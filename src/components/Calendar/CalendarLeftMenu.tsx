import React from 'react';
import { Col, Form, InputGroup, Card, Container } from 'react-bootstrap';

const CalendarLeftMenu = () => {
  return (
    <Col md={4} lg={3} className="mt-5">
      <Container   >
        <Card.Body className="d-flex flex-column ">
          <div className="filter-header mb-3">
            <span>Eğitim Arama</span>
          </div>
          <Form.Control
            type="text"
            id="search-event"
            className="cal-filter-input"
            placeholder="Eğitim arayın..."
          />
        </Card.Body>
        <Card.Body className="d-flex flex-column">
          <div className="filter-header mb-2">
            <span>Eğitmen</span>
          </div>
          <InputGroup className="calender-select">
            <Form.Control
              type="text"
              id="react-select-2-input"
              placeholder="Eğitmen Seçiniz"
            />
            <InputGroup.Text>
              <svg
                height={20}
                width={20}
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
        </Card.Body>
        <Card.Body className="d-flex flex-column">
          <div className="filter-header mb-2">
            <span>Eğitim Durumu</span>
          </div>
          <div className="edu-status-filter">
            <Form.Check
              className="me-2 checkEventEnded"
              type="checkbox"
              label="Bitmiş Dersler"
              id="eventEnded"
            />
            <Form.Check
              className="me-2 checkEventContinue"
              type="checkbox"
              label="Devam Eden Dersler"
              id="eventContinue"
            />
            <Form.Check
              className="me-2 checkEventBuyed"
              type="checkbox"
              label="Satın Alınmış Dersler"
              id="eventBuyed"
            />
            <Form.Check
              className="me-2 checkEventNotStarted"
              type="checkbox"
              label="Başlamamış Dersler"
              id="eventNotStarted"
            />
          </div>
        </Card.Body>
      </Container>
    </Col>
  );
}

export default CalendarLeftMenu;
