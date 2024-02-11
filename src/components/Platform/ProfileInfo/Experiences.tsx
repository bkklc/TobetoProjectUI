import { FormEvent, useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import tokenDecode from '../../../hooks/tokenDecode';
import AddRequestExperience from '../../../models/requests/experience/AddRequestExperience';
import experienceService from '../../../services/experienceService';

const Experiences = () => {

  const [formData, setFormData] = useState<AddRequestExperience>(
    {
      UserId: Number(tokenDecode().ID),
      CityId: 0,
      CompanyName: '',
      Position: '',
      Sector: '',
      StartDate: new Date(),
      EndDate: new Date()
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    experienceService
      .add(formData)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  };

  useEffect(() => {

  }, [formData]);

  return (
    <Col xs={12} lg={9} style={{ minHeight: '90vh' }}>
      <Form action="#" data-hs-cf-bound="true" onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">Kurum Adı*</Form.Label>
            <FormControl
              name="CompanyName"
              className="form-control tobeto-input"
              type="text"
              placeholder="Kampüs 365"
              value={formData.CompanyName}
              onChange={e => setFormData({ ...formData, CompanyName: e.target.value })}
            />
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">Pozisyon*</Form.Label>
            <FormControl
              name="Position"
              className="form-control tobeto-input"
              type="text"
              placeholder="Front-End Developer"
              value={formData.Position}
              onChange={e => setFormData({ ...formData, Position: e.target.value })}
            />
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">Sektör*</Form.Label>
            <FormControl
              name="Sector"
              className="form-control tobeto-input"
              type="text"
              placeholder="Yazılım"
              value={formData.Sector}
              onChange={e => setFormData({ ...formData, Sector: e.target.value })}
            />
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">Şehir Seçiniz*</Form.Label>
            <Form.Select
              name="country"
              className="form-select tobeto-input"
              aria-label="">
              <option value="">İl Seçiniz</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">İş Başlangıcı*</Form.Label>
            <InputGroup>
              <FormControl
                as="input"
                type="text"
                placeholder="gg.aa.yyyy"
                className="form-control tobeto-input"
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">İş Bitiş*</Form.Label>
            <InputGroup>
              <FormControl
                as="input"
                type="text"
                placeholder="gg.aa.yyyy"
                disabled className="form-control tobeto-input"
                value="" />
            </InputGroup>
          </Col>
          <Col xs={12} md={{ span: 6, offset: 6 }}>
            <Form.Check
              name="checkbox"
              type="checkbox"
              label={<small className="text-muted">Çalışmaya Devam Ediyorum</small>}
            />
          </Col>
          <Col xs={12} md={12} className="mb-6">
            <Form.Label className="input-label-text">İş Açıklaması</Form.Label>
            <FormControl
              as="textarea"
              rows={6}
              name="description"
              className="form-control tobeto-input" />
          </Col>
        </Row>
        <Button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">Kaydet</Button>
      </Form>
      <Col xs={12}></Col>
    </Col>
  );
};

export default Experiences;

