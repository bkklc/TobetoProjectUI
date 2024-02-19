import { FormEvent, useEffect, useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import AddRequestEducation from '../../../models/requests/education/AddRequestEducation';
import tokenDecode from '../../../hooks/tokenDecode';
import educationService from '../../../services/educationService';
import Paginate from '../../../models/paginate';
import GetAllEducation from '../../../models/response/education/GetAllEducation';
import { AddRequestSchoolName } from '../../../models/requests/schoolName/addRequestSchoolName';
import schoolNameService from '../../../services/schoolNameService';
import DatePicker from 'react-datepicker';
import ResponseData from '../../../hooks/ResponseData';
import educationDegreeService from '../../../services/educationDegreeService';
import { GetAllSchoolName } from '../../../models/response/schoolName/getAllSchoolName';

function EducationLife() {
  const educationDegreeResponse = ResponseData(educationDegreeService.getAll());

  const [isEndDateEnabled, setIsEndDateEnabled] = useState(true);

  const [schoolNameData, setSchoolNameData] = useState<Paginate<GetAllSchoolName>>({ items: [] })
  const schoolNameResponse = ResponseData(schoolNameService.getAll());

  const [formData, setFormData] = useState<AddRequestEducation>(
    {
      UserId: Number(tokenDecode().ID),
      EducationDegreeId: 0,
      SchoolNameId: 0,
      Department: '',
      StartDate: '',
      EndDate: ''
    }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    educationService
      .add(formData)
      .then(() => {
        fetchData();
      })
      .catch(error => console.log(error))
  }

  const deleteData = async (id: number) => {
    try {
      await educationService.delete(id)
      fetchData();
    }
    catch (error) {
      console.error("Veri silme sırasında bir hata meydana geldi:", error)
    }
  }

  const [responseData, setResponseData] = useState<Paginate<GetAllEducation>>({ items: [] })

  const fetchSchoolName = async () => {
    try {
      await schoolNameService.getAll()
        .then(
          (school) => {
            if (school.status === 200) {
              setSchoolNameData(school.data)
            }
          }
        );
    } catch (error) {
      console.error("Veri çekme sırasında bir hata meydana geldi:", error)
    }
  }

  const fetchData = async () => {
    try {
      await educationService.getAll().then(
        (res) => {
          if (res.status === 200) {
            setResponseData(res.data)
          }
        }
      );
    } catch (error) {
      console.error("Veri çekme sırasında bir hata meydana geldi:", error)
    }
  }

  useEffect(() => {
    fetchSchoolName();
    fetchData();
  }, [])

  return (
    <Col xs={12} lg={9} style={{ minHeight: "90vh" }}>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Eğitim Durumu */}
          <Form.Group as={Col} md={6} controlId="formEducationStatus">
            <Form.Label>Eğitim Durumu*</Form.Label>
            <Form.Control
              as="select"
              name="EducationStatus"
              className="tobeto-input"
            >
              <option id='0' value="">Seviye Seçiniz</option>
              {educationDegreeResponse && (educationDegreeResponse.items.map((degrees: any) => (
                <option key={degrees.id} value={degrees.id} id={degrees.id}>{degrees.name}</option>
              )))}
            </Form.Control>
          </Form.Group>
          {/* Üniversite */}
          <Form.Group as={Col} md={6} controlId="formUniversity">
            <Form.Label>Üniversite*</Form.Label>
            <Form.Select
              as="select"
              name="University"
              className="tobeto-input"
              value={formData.SchoolNameId}
              onChange={e => setFormData({ ...formData, SchoolNameId: Number(e.target.options[e.target.selectedIndex].id) })}
            >
              {schoolNameResponse && (schoolNameResponse.items.map((scNames: any) => (
                <option key={scNames.id} value={scNames.id} id={scNames.id} >{scNames.name}</option>
              )))}
            </Form.Select>
          </Form.Group>
          {/* Bölüm */}
          <Form.Group as={Col} md={6} controlId="formDepartment">
            <Form.Label>Bölüm*</Form.Label>
            <Form.Control
              name="Department"
              className="tobeto-input"
              type="text"
              placeholder="Bölüm"
              value={formData.Department}
              onChange={e => setFormData({ ...formData, Department: e.target.value })}
            />
          </Form.Group>
          {/* Başlangıç Yılı */}
          <Form.Group as={Col} md={6} controlId="formStartDate">
            <Form.Label>Başlangıç Yılı*</Form.Label>
            <Form.Control
              name="StartDate"
              type="text"
              placeholder="Başlangıç Yılınızı Seçiniz"
              className="tobeto-input"
              value={formData.StartDate}
              onChange={e => setFormData({ ...formData, StartDate: e.target.value })}
            />
          </Form.Group>
          {/* Mezuniyet Yılı */}
          <Form.Group as={Col} md={6} controlId="formGraduationDate">
            <Form.Label>Mezuniyet Yılı*</Form.Label>
            <Form.Control
              name="EndDate"
              type="text"
              placeholder="Mezuniyet Yılınızı Seçiniz"
              className="tobeto-input"
              value={formData.EndDate}
              onChange={e => {
                setFormData({ ...formData, EndDate: e.target.value })
                setIsEndDateEnabled(true)
              }}
              disabled={!isEndDateEnabled}
            />
            <Form.Check
              name='checkbox'
              type="checkbox"
              label="Devam Ediyorum"
              className="mt-3"
              onChange={() => setIsEndDateEnabled(!isEndDateEnabled)}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" className="py-2 mb-3" type="submit">
          Kaydet
        </Button>
      </Form>
      <Col xs={12}>
        {
          responseData.items.map((data: any) => (
            <div key={data.id} id={data.id} className="my-grade">
              <div className="grade-header">
                <span className="grade-date"> {`${data.startDate} | ${data.endDate === null ? "Devam Ediyor" : data.endDate}`}</span>
                <span className="grade-degree">Ön Lisans</span>
              </div>
              <div className="grade-details">
                <div className="grade-details-col">
                  <span className="grade-details-header">Üniversite</span>
                  <span className="grade-details-content">{data.name}</span>
                </div>
                <div className="grade-details-col">
                  <span className="grade-details-header">Bölüm</span>
                  <span className="grade-details-content">{data.department}</span>
                </div>
                <div>
                  <span className=" grade-delete" onClick={() => deleteData(data.id)} />
                </div>
              </div>
            </div>
          ))
        }
      </Col>
    </Col>
  );
}

export default EducationLife;

