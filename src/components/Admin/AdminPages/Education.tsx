import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Paginate from "../../../models/paginate";
import GetAllCourse from "../../../models/response/course/GetAllCourse";
import courseService from "../../../services/courseService";
import Table from 'react-bootstrap/Table';
import AddRequestCourse, { defaultAddRequestCourse } from "../../../models/requests/course/AddRequestCourse";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ADDED_SUCCESS, DELETE_SUCCESS } from "../../../contexts/messageContexts";
import toastr from "toastr";


export default function Education() {
    const [course, setCourse] = useState<Paginate<GetAllCourse>>({ items: [] })
    const [formData, setFormData] = useState<AddRequestCourse>(defaultAddRequestCourse)
    /*Modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        courseService
            .add(formData)
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

    const deleteData = async (id: number) => {
        try {
          await courseService.delete(id)
          handleCloseModal();
          toastr.info(DELETE_SUCCESS)
          fetchData();
        }
        catch (error) {
          console.error("Veri silme sırasında bir hata meydana geldi:", error)
        }
      }



    useEffect(() => {
        fetchData();
    },[])

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const handleDeleteInfo = (desc: any) => {
        setModalData(desc);
        setShowModal(true);
      };
    return (

        <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
            <Button variant="primary" onClick={handleShow}>
                Eğitim Ekle
            </Button>

            <Modal className='fade alert-modal modal' show={showModal} onHide={handleCloseModal} centered>
          <Modal.Body>
            <div className="mw-xl mx-auto ">
              <div className=" bg-white shadow-lg">
                <div className="alert-header mx-3">
                  <span className="alert-icon" />
                  <span className="alert-close" onClick={handleCloseModal} />
                </div>
                <p className="alert-message mx-3">
                  Seçilen Eğitimi silmek istediğinize emin misiniz?
                </p>
                <p className="alert-message-light mx-3">Bu işlem geri alınamaz.</p>
                <div className="alert-buttons">
                  <button className="btn btn-no my-3 " onClick={handleCloseModal}>Hayır</button>
                  <button className="btn btn-yes my-3" onClick={() => deleteData(Number(modalData))}>Evet</button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eğitim Ekle</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>İsim</Form.Label>
                            <Form.Control
                                className="tobeto-input"
                                type="text"
                                placeholder="Eğitim İsmi"
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Açıklama</Form.Label>
                            <Form.Control
                                className="tobeto-input"
                                type="text"
                                placeholder="Eğitim Açıklaması"
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Alt Kategori</Form.Label>
                            <Form.Select
                                className="tobeto-input"
                                as="select"

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Başlangıç Tarihi</Form.Label>
                            <Container>
                                <Row style={{ maxWidth: '100%' }}>
                                    <DatePicker
                                        selected={formData.startedDate}
                                        className="form-control tobeto-input "
                                        dateFormat="dd.MM.yyyy"
                                        placeholderText="gg.aa.yyyy"
                                        onChange={(date: Date) => {
                                            setFormData({ ...formData, startedDate: date });
                                        }}
                                    />
                                </Row>
                            </Container>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Bitiş Tarihi</Form.Label>
                            <Container>
                                <Row style={{ maxWidth: '100%' }}>
                                    <DatePicker
                                        selected={formData.endDate}
                                        className="form-control tobeto-input "
                                        dateFormat="dd.MM.yyyy"
                                        placeholderText="gg.aa.yyyy"
                                        onChange={(date: Date) => {
                                            setFormData({ ...formData, endDate: date });
                                        }}
                                    />
                                </Row>
                            </Container>

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


            <div className="table-responsive-sm">
                <Table className="mt-8 corpTable table table-hover">
                    <thead>
                        <tr>
                            <th>İsim</th>
                            <th className="text-center">Alt Kategori</th>
                            <th>Açıklama</th>
                            <th style={{ textAlign: "center" }}>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.items.map((data: any) => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.subTypeName}</td>
                                <td>{data.description}</td>
                                <td style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingTop: 15
                                }}>
                                    <span className=" cv-edit-icon" />
                                    <span className=" trashIcon" onClick={() => handleDeleteInfo(data.id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Col>
    )
}
