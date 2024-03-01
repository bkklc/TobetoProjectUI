import { FormEvent, useEffect, useState } from "react"
import Paginate from "../../../models/paginate"
import GetAllAnnouncement from "../../../models/response/Announcement/GetAllAnnouncement"
import announcementService from "../../../services/announcementService";
import { Button, Col, Container, Form, Modal, Table } from "react-bootstrap";
import AddRequestAnnouncement, { defaultAddRequestAnnouncement } from "../../../models/requests/announcement/AddRequestAnnouncement";
import { ADDED_SUCCESS, DELETE_SUCCESS } from "../../../contexts/messageContexts";
import toastr from "toastr";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Announcement() {
    const [announcement, setAnnouncement] = useState<Paginate<GetAllAnnouncement>>({ items: [] })
    const [formData, setFormData] = useState<AddRequestAnnouncement>(defaultAddRequestAnnouncement)
    /*Adding Modal*/
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        announcementService
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
            await announcementService.getAll(0, 20).then(
                (res) => {
                    if (res.status === 200) {
                        setAnnouncement(res.data)
                    }
                }
            );

        } catch (error) {
            console.error("Veri çekme sırasında bir hata oluştu:", error);
        }
    };


    const deleteData = async (id: number) => {
        try {
            await announcementService.delete(id)
            handleCloseModal();
            toastr.info(DELETE_SUCCESS)
            fetchData();
        }
        catch (error) {
            console.error("Veri silme sırasında bir hata meydana geldi:", error)
        }
    }
    const modules = {
        toolbar: {
            container: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                ['clean'],
                ['code-block'],
            ]
        }
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
            <Button variant="primary" onClick={handleShow}>
                Duyuru Yayınla
            </Button>
            <div className="table-responsive-sm">
                <Table className="mt-8 corpTable table table-hover">
                    <thead>
                        <tr>
                            <th>İsim</th>
                            <th>Açıklama</th>
                            <th style={{ textAlign: "center" }}>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {announcement.items.map((data: any) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.description.slice(0, 30)}</td>
                                <td style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingTop: 15
                                }}>
                                    <span className=" trashIcon" onClick={() => handleDeleteInfo(data.id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Modal className='fade alert-modal modal' show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    <div className="mw-xl mx-auto ">
                        <div className=" bg-white shadow-lg">
                            <div className="alert-header mx-3">
                                <span className="alert-icon" />
                                <span className="alert-close" onClick={handleCloseModal} />
                            </div>
                            <p className="alert-message mx-3">
                                Seçilen Duyuruyu silmek istediğinize emin misiniz?
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




            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Duyuru Yayınla</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>İsim</Form.Label>
                            <Form.Control
                                className="tobeto-input"
                                type="text"
                                placeholder="Duyuru İsmi"
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Açıklama</Form.Label>                        
                            <div>
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e })}
                                />
                            </div>

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
