
import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

function EducationLife() {
  return (
    <Col xs={12} lg={9} style={{ minHeight: "90vh" }}>
      <Form>
      <Row>
          {/* Eğitim Durumu */}
          <Form.Group as={Col} md={6} controlId="formEducationStatus">
            <Form.Label>Eğitim Durumu*</Form.Label>
            <Form.Control as="select" name="EducationStatus" className="tobeto-input">
              <option value="">Seviye Seçiniz</option>
              <option value="Lisans">Lisans</option>
              <option value="Ön Lisans">Ön Lisans</option>
              <option value="Yüksek Lisans">Yüksek Lisans</option>
              <option value="Doktora">Doktora</option>
            </Form.Control>
          </Form.Group>
          {/* Üniversite */}
          <Form.Group as={Col} md={6} controlId="formUniversity">
            <Form.Label>Üniversite*</Form.Label>
            <Form.Control name="University" className="tobeto-input" type="text" placeholder="Kampüs 365" />
          </Form.Group>
          {/* Bölüm */}
          <Form.Group as={Col} md={6} controlId="formDepartment">
            <Form.Label>Bölüm*</Form.Label>
            <Form.Control name="Department" className="tobeto-input" type="text" placeholder="Bölüm" />
          </Form.Group>
          {/* Başlangıç Yılı */}
          <Form.Group as={Col} md={6} controlId="formStartDate">
            <Form.Label>Başlangıç Yılı*</Form.Label>
            <Form.Control type="text" placeholder="Başlangıç Yılınızı Seçiniz" className="tobeto-input" />
          </Form.Group>
          {/* Mezuniyet Yılı */}
          <Form.Group as={Col} md={6} controlId="formGraduationDate">
            <Form.Label>Mezuniyet Yılı*</Form.Label>
            <Form.Control type="text" placeholder="Mezuniyet Yılınızı Seçiniz" className="tobeto-input" />
            <Form.Check type="checkbox" label="Devam Ediyorum" className="mt-3" />
          </Form.Group>
          </Row>
        <Button variant="primary" className="py-2 mb-3" type="submit">
          Kaydet
        </Button>
      </Form>
    </Col>
  );
}

export default EducationLife;
