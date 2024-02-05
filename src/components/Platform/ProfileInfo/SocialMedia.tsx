import { Button, Col, Form, Row } from "react-bootstrap";

const SocialMedia = () => {
  return (
    <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
      <Col className="col-12 my-2">
        <Form data-hs-cf-bound="true">
          <Row className="row mb-2 mt-4">
            <Col className="col-md-4 col-12">
              <select name="socialMedia" className="form-select" aria-label="">
                <option value="">Seçiniz*</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Behance">Behance</option>
                <option value="Dribble">Dribble</option>
                <option value="Github">Github</option>
              </select>
            </Col>
            <Col className="col-md-8 col-12">
              <input
                name="socialMediaUrl"
                type="text"
                placeholder="https://"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
            </Col>
          </Row>
          <Button className="btn btn-primary py-2 mt-1 d-inline-block mobil-btn">
            Kaydet
          </Button>
        </Form>
      </Col>
    </Col>
  );
};

export default SocialMedia;
