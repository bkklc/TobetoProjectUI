import { Col, Container, Form, Row } from "react-bootstrap";

export default function Abilities() {
  return (
    <Col md={9}>
      <Container className="container-lg " style={{ minHeight: "90vh" }}>
        <Row className="mb-2">
          <div className="col-12 mb-6">
            <label className="form-label">Yetkinlik</label>
            <div className="input-group">
            <Form.Select name="input-group-text" className="form-select tobeto-input" aria-label="">
              <option value="">Seçiniz</option>
            </Form.Select>              
              
            </div>
          </div>
        </Row>
        <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
          Kaydet
        </button>
        <div className="col-12">
          <div className="my-grade">
            <div className="grade-details d-flex justify-content-between align-items-center">
              <div className="grade-details-col">
                <span className="grade-details-content">Javascript</span>
              </div>
              <span className="grade-delete g-del"></span>
            </div>
          </div>
          <div className="my-grade">
            <div className="grade-details d-flex justify-content-between align-items-center">
              <div className="grade-details-col">
                <span className="grade-details-content">HTML</span>
              </div>
              <span className="grade-delete g-del"></span>
            </div>
          </div>
          <div className="my-grade">
            <div className="grade-details d-flex justify-content-between align-items-center">
              <div className="grade-details-col">
                <span className="grade-details-content">CSS</span>
              </div>
              <span className="grade-delete g-del"></span>
            </div>
          </div>
        </div>
      </Container>
    </Col>
  );
}
