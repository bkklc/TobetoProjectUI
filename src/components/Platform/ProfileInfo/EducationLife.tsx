import { FormEvent, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import tokenDecode from '../../../hooks/tokenDecode';
import Paginate from '../../../models/paginate';
import AddRequestEducation from '../../../models/requests/education/AddRequestEducation';
import GetAllEducation from '../../../models/response/education/GetAllEducation';
import GetAllEducationDegree from '../../../models/response/educationDegree/GetAllEducationDegree';
import { GetAllSchoolName } from '../../../models/response/schoolName/getAllSchoolName';
import educationDegreeService from '../../../services/educationDegreeService';
import educationService from '../../../services/educationService';
import schoolNameService from '../../../services/schoolNameService';

function EducationLife() {
  const [educationDegreeData, setEducationDegreeData] = useState<Paginate<GetAllEducationDegree>>({ items: [] })

  const [isEndDateEnabled, setIsEndDateEnabled] = useState(true);

  const [schoolNameData, setSchoolNameData] = useState<Paginate<GetAllSchoolName>>({ items: [] })

  const [formData, setFormData] = useState<AddRequestEducation>(
    {
      UserId: Number(tokenDecode().ID),
      EducationDegreeId: 0,
      SchoolNameId: 0,
      Department: '',
      StartDate: new Date(),
      EndDate: new Date()
    }
  )

  const fetchDegreeName = async () => {
    try {
      await educationDegreeService.getAll(0,20)
        .then(
          (degree) => {
            if (degree.status === 200) {
              setEducationDegreeData(degree.data)
            }
          }
        );
    } catch (error) {
      console.error("Veri çekme sırasında bir hata meydana geldi:", error)
    }
  }

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
      await schoolNameService.getAll(0,200)
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
      await educationService.getAll(0,10).then(
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
    fetchDegreeName();
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
            <Form.Select
              as="select"
              name="EducationStatus"
              className="tobeto-input"
            >
              {educationDegreeData.items.map((data: any) => (
                <option key={data.id} value={data.id} id={data.id}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
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
              {
                schoolNameData.items.map((data: any) => (
                  <option key={data.id} value={data.id} id={data.id} >{data.name}</option>
                ))
              }
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
            <Row style={{ maxWidth: '416px', paddingLeft: '12px' }}>
              <DatePicker
                selected={formData.StartDate}
                className="form-control tobeto-input"
                name="StartDate"
                dateFormat="yyyy"
                onChange={(date: Date) => {
                  setFormData({ ...formData, StartDate: date });
                }}
              />
            </Row>
          </Form.Group>
          {/* Mezuniyet Yılı */}
          <Form.Group as={Col} md={6} controlId="formGraduationDate">
            <Form.Label>Mezuniyet Yılı*</Form.Label>
            <Row style={{ maxWidth: '416px', paddingLeft: '12px' }}>
              <DatePicker
                selected={formData.EndDate}
                className="form-control tobeto-input"
                name="EndDate"
                dateFormat="yyyy"
                onChange={(date: Date) => {
                  setFormData({ ...formData, EndDate: date })
                }}
              />
            </Row>
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
                  <span className="grade-details-content">
                    {schoolNameData.items.find(school => school.id === data.schoolNameId)?.name}
                  </span>
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

