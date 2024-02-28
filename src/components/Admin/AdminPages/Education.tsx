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
import GetAllCourseSubType from "../../../models/response/courseSubType/GetAllCourseSubType";
import courseSubTypeService from "../../../services/courseSubTypeService";
import Uppy from "@uppy/core";
import { DashboardModal } from '@uppy/react'
import XHR from '@uppy/xhr-upload';
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import imageService from "../../../services/imageService";

export default function Education() {
    const [course, setCourse] = useState<Paginate<GetAllCourse>>({ items: [] })
    const [subType, setSubType] = useState<Paginate<GetAllCourseSubType>>({ items: [] })
    const [formData, setFormData] = useState<AddRequestCourse>(defaultAddRequestCourse)

    /*Modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*Delete Modal */
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDeleteInfo = (desc: any) => {
        setModalData(desc);
        setShowModal(true);
    };

    /*Delete Modal END*/

    /*Uppy Modal */
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


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

    const fetchSubType = async () => {
        try {
            await courseSubTypeService.getAll(0, 20).then(
                (res) => {
                    if (res.status === 200) {
                        setSubType(res.data)
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

    const uppy = new Uppy({
        debug: true,
        autoProceed: false,
        restrictions: {
            maxFileSize: 1000000,
            maxNumberOfFiles: 1,
            minNumberOfFiles: 1
        }
    })
    uppy.use(XHR, { endpoint: "https://hoixi.com.tr/api/FileUpload" })

    uppy.on('upload-success', (file: any, response: any) => {
        imageService.add({
            Name: file.name,
            Path: response.body.sitePath,
        }).then(res => {
            setFormData({ ...formData, imageId: Number(res.data.id) })
        })
    });

    useEffect(() => {
        fetchData();
        fetchSubType();
    }, [])


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
                                onChange={e => setFormData({ ...formData, subTypeId: Number(e.target.options[e.target.selectedIndex].id) })}
                            >

                                <option>Alt Kategori Seçiniz</option>
                                {subType.items.map((data: any) => (
                                    <option id={data.id}>{data.name}</option>
                                ))}
                            </Form.Select>
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
                        <Form.Group className="mt-5">
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
                        <Form.Label className="mt-5">Eğitim Fotoğrafı</Form.Label>
                        <div className='upload-area'>
                            <div className="cursor-pointer" onClick={toggleModal}>
                                <svg
                                    width={78}
                                    height={78}
                                    viewBox="0 0 78 78"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x={2}
                                        y={2}
                                        width={74}
                                        height={74}
                                        rx={37}
                                        fill="#F1E3FF"
                                        stroke="#9933FF"
                                        strokeWidth={4}
                                        strokeDasharray="2 2"
                                    />
                                    <path
                                        d="M47 45L40 37L33 45"
                                        stroke="#9933FF"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M40 37V53"
                                        stroke="#9933FF"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969"
                                        stroke="#9933FF"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>Dosya Yükle</span>
                            <DashboardModal uppy={uppy} open={isOpen} closeModalOnClickOutside onRequestClose={toggleModal} />
                        </div>


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
