import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PasswordUpdatedComponent from "../../../components/Tobeto/AuthComponents/PassWordUpdatedComponent";


const PasswordUpdated = () => {
  return (
    <Container className="mt-40 mb-10">
      <Row>
        <Col>
          <PasswordUpdatedComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordUpdated;
