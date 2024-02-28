import { Button, Col, Container, Form, Modal, Table } from "react-bootstrap";
import GetAllClassroomGroups from "../../../models/response/classroomGroup/GetAllClassroomGroups";
import { FormEvent, useEffect, useState } from "react";
import Paginate from "../../../models/paginate";
import classroomGroupService from "../../../services/classroomGroupService";
import GetAllCourse from "../../../models/response/course/GetAllCourse";
import courseService from "../../../services/courseService";
import AddRequestClassroomGroup, { defaultAddRequestClassroomGroup } from "../../../models/requests/classroomGroup/AddRequestClassroomGroup";
import GetAllClassrooms from "../../../models/response/classroom/GetAllClassrooms";
import GetAllGroup from "../../../models/response/group/GetAllGroup";
import classroomService from "../../../services/classroomService";
import groupService from "../../../services/groupService";
import { ADDED_SUCCESS } from "../../../contexts/messageContexts";
import toastr from "toastr";
import AddRequestClassroomGroupCourse, { defaultAddRequestClassroomGroupCourse } from "../../../models/requests/classroomGroupCourse/AddRequestClassroomGroupCourse";
import classroomGroupCourseService from "../../../services/classroomGroupCourseService";

export default function Classes() {
  const [classroom, setClassroom] = useState<Paginate<GetAllClassroomGroups>>({ items: [] })
  const [course, setCourse] = useState<Paginate<GetAllCourse>>({ items: [] })
  const [classroomAdd, setClassroomAdd] = useState<Paginate<GetAllClassrooms>>({ items: [] })
  const [group, setGroup] = useState<Paginate<GetAllGroup>>({ items: [] })
  const [formData, setFormData] = useState<AddRequestClassroomGroup>(defaultAddRequestClassroomGroup)
  const [formDataCourse, setFormDataCourse] = useState<AddRequestClassroomGroupCourse>(defaultAddRequestClassroomGroupCourse)
  const [student, setStudent] = useState<any>()

  /*Modal*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*ModalCourse*/
  const [showCourse, setShowCourse] = useState(false);
  const handleCloseCourse = () => setShowCourse(false);
  const handleShowCourse = () => setShowCourse(true);

  /*ModalStudent*/
  const [showStudent, setShowStudent] = useState(false);
  const handleCloseStudent = () => setShowStudent(false);
  const handleShowStudent = () => setShowStudent(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    classroomGroupService
      .add(formData)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(ADDED_SUCCESS);
          fetchData();
        }

      })
      .catch(error => console.log(error))
  }


  const handleSubmitCourse = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    classroomGroupCourseService
      .add(formDataCourse)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(ADDED_SUCCESS);
          fetchData();
        }

      })
      .catch(error => console.log(error))
  }

  const fetchData = async () => {
    try {
      await classroomGroupService.getAll(0, 20).then(
        (res) => {
          if (res.status === 200) {
            setClassroom(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const fetchCourse = async () => {
    try {
      await courseService.getAll(0, 20).then(
        (res) => {
          if (res.status === 200) {
            setCourse(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const fetchClass = async () => {
    try {
      await classroomService.getAll(0, 20).then(
        (res) => {
          if (res.status === 200) {
            setClassroomAdd(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const fetchGroup = async () => {
    try {
      await groupService.getAll(0, 20).then(
        (res) => {
          if (res.status === 200) {
            setGroup(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCourse();
    fetchGroup();
    fetchClass();
  }, [])
  return (

    <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
      <div className="section-header">
        <span className="header-text mb-10">Sınıf İşlemleri</span>
      </div>
      <Button variant="primary" onClick={handleShow}>
        Sınıf Ekle
      </Button>

      <div className="table-responsive-sm">
        <Table className="mt-8 corpTable table table-hover">
          <thead>
            <tr>
              <th>Sınıf</th>
              <th>Öğrenci Sayısı</th>
              <th style={{ textAlign: "center" }}>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {classroom.items.map((data: GetAllClassroomGroups) => (
              <tr>
                <td>{data.classroomName + " " + data.groupName}</td>
                <td>{data.students?.length}</td>
                <td style={{ textAlign: "right" }}>
                  <span className="material-symbols-outlined size-26 btn" onClick={() => {
                    formDataCourse.classroomGroupId = data.id;
                    handleShowCourse()
                  }}>playlist_add</span>
                  <span className="material-symbols-outlined size-26 btn">person_add</span>
                  <span className="material-symbols-outlined size-26 btn" onClick={() => {
                    setStudent(data.students)
                    console.log(student);
                    handleShowStudent();
                  }}>person</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


      <Modal show={showCourse} onHide={handleCloseCourse}>
        <Modal.Header closeButton>
          <Modal.Title>Kurs Tanımla</Modal.Title>
        </Modal.Header>
        <Container>
          <Form onSubmit={handleSubmitCourse}>
            <Form.Group className="mb-3">
              <Form.Label>Kurs</Form.Label>
              <Form.Select
                className="tobeto-input"
                as="select"
                onChange={e => setFormDataCourse({ ...formDataCourse, courseId: Number(e.target.options[e.target.selectedIndex].value) })}
              >
                <option>Kurs Seçiniz</option>
                {course.items.map((data: GetAllCourse) => (
                  <option value={data.id}>{data.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseCourse}>
                Kapat
              </Button>
              <Button variant="success" type="submit" onClick={handleCloseCourse}>
                Ekle
              </Button>
            </Modal.Footer>
          </Form>
        </Container>
      </Modal>

      <Modal show={showStudent} onHide={handleCloseStudent}>
        <Modal.Header closeButton>
          <Modal.Title>Öğrenciler</Modal.Title>
        </Modal.Header>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Öğrenci Adı</th>
                <th>E-Posta</th>
              </tr>
            </thead>
            <tbody>
              {student && student.map((data: any) => (
                <tr>
                  <td>{data.student.userDetail.firstName + " " + data.student.userDetail.lastName}</td>
                  <td>{data.student.userDetail.email}</td>
                </tr>

              ))}
            </tbody>
          </Table>

          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseStudent}>
              Kapat
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sınıf Ekle</Modal.Title>
        </Modal.Header>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Eğitim</Form.Label>
              <Form.Select
                className="tobeto-input"
                as="select"
                onChange={e => setFormData({ ...formData, classroomId: Number(e.target.options[e.target.selectedIndex].value) })}
              >

                <option>Eğitim Seçiniz</option>
                {classroomAdd.items.map((data: GetAllClassrooms) => (
                  <option value={data.id}>{data.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Grup</Form.Label>
              <Form.Select
                className="tobeto-input"
                as="select"
                onChange={e => setFormData({ ...formData, groupId: Number(e.target.options[e.target.selectedIndex].value) })}
              >

                <option>Grup Seçiniz</option>
                {group.items.map((data: GetAllGroup) => (
                  <option value={data.id}>{data.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Kapat
              </Button>
              <Button variant="success" type="submit" onClick={handleClose}>
                Ekle
              </Button>
            </Modal.Footer>
          </Form>
        </Container>
      </Modal>

    </Col>
  )
}
