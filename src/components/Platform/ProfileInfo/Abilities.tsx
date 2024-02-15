import { Col, Container, Form, Row } from "react-bootstrap";
import ResponseData from "../../../hooks/ResponseData";
import skillService from "../../../services/skillService";

export default function Abilities() {

  const skillResponse = ResponseData(skillService.getAll());

  return (
    <Col md={9}>
      <Container className="container-lg " style={{ minHeight: "90vh" }}>
        <Row className="mb-2">
          <div className="col-12 mb-6">
            <label className="form-label">Yetkinlik</label>
            <div className="input-group">
              <Form.Select name="input-group-text" className="form-select tobeto-input" aria-label="" defaultValue="">
                <option value="" disabled>Seçiniz</option>
                {skillResponse && skillResponse.items.map((skill: any) => (
                  <option key={skill.id} value={skill.id}>
                    {skill.name}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </Row>
        <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
          Kaydet
        </button>
      </Container>
    </Col>
  );
}
