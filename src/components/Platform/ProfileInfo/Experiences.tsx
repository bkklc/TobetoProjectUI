import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ResponseData from '../../../hooks/ResponseData';
import tokenDecode from '../../../hooks/tokenDecode';
import AddRequestExperience from '../../../models/requests/experience/AddRequestExperience';
import cityService from '../../../services/cityService';
import experienceService from '../../../services/experienceService';



const Experiences = () => {

  const cityResponse = ResponseData(cityService.getAll());

  const [isEndDateEnabled, setIsEndDateEnabled] = useState(false);

  const [formData, setFormData] = useState<AddRequestExperience>(
    {
      UserId: Number(tokenDecode().ID),
      CityId: 0,
      CompanyName: '',
      Position: '',
      Sector: '',
      Description: '',
      StartDate: new Date(),
      EndDate: null
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
              name="CityId"
              className="form-select tobeto-input"
              aria-label=""
              onChange={e => setFormData({ ...formData, CityId: e.target.selectedIndex })}>
              <option id='0' value="">İl Seçiniz</option>
              {cityResponse && (cityResponse.items.map((cities: any) => (
                <option key={cities.id} value={cities.id}>{cities.name}</option>
              )))}
            </Form.Select>
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">İş Başlangıcı*</Form.Label>
            <DatePicker
              selected={formData.StartDate}
              className="form-control tobeto-input"
              dateFormat="dd.MM.yyyy"
              placeholderText="gg.aa.yyyy"
              onChange={(date: Date) => {
                setFormData({ ...formData, StartDate: date });
                setIsEndDateEnabled(true);
              }}
            />
          </Col>
          <Col xs={12} md={6} className="mb-6">
            <Form.Label className="input-label-text">İş Bitiş*</Form.Label>
            <DatePicker
              selected={formData.EndDate}
              onChange={(date: Date) => setFormData({ ...formData, EndDate: date })}
              className="form-control tobeto-input"
              dateFormat="dd.MM.yyyy"
              placeholderText="gg.aa.yyyy"
              disabled={!isEndDateEnabled}
            />
          </Col>
          <Col xs={12} md={{ span: 6, offset: 6 }}>
            <Form.Check
              name="checkbox"
              type="checkbox"
              label={<small className="text-muted">Çalışmaya Devam Ediyorum</small>}
              onChange={() => setIsEndDateEnabled(!isEndDateEnabled)}
            />
          </Col>
          <Col xs={12} md={12} className="mb-6">
            <Form.Label className="input-label-text">İş Açıklaması</Form.Label>
            <FormControl
              as="textarea"
              rows={6}
              name="Description"
              className="form-control tobeto-input"
              value={formData.Description}
              onChange={e => setFormData({ ...formData, Description: e.target.value })}
            />
          </Col>
        </Row>
        <Button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">Kaydet</Button>
      </Form>
      <Col xs={12}></Col>
    </Col>
  );
};

export default Experiences;

