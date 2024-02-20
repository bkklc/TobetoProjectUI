import { Col, Modal, Row } from 'react-bootstrap';
import Uppy from "@uppy/core";
import { DashboardModal } from '@uppy/react'
import XHR from '@uppy/xhr-upload';
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { useEffect, useState } from 'react';
import certificateService from '../../../services/certificateService';
import tokenDecode from '../../../hooks/tokenDecode';
import GetByIdResponseUser, { defaultUser } from '../../../models/response/user/GetByIdResponseUser';
import GetByLoginUserData from '../../../hooks/getByIdUserHook';
import { Link } from 'react-router-dom';

function Certificates() {

  const [isOpen, setIsOpen] = useState(false);
  const [responseData, setResponseData] = useState<GetByIdResponseUser>(defaultUser);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
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
    certificateService.add({
      UserId: Number(tokenDecode().ID),
      Path: response.body.sitePath,
      FileName: file.name,
    })
    GetByLoginUserData(setResponseData);
  });

  useEffect(() => {
    GetByLoginUserData(setResponseData);
  }, [])

  const deleteData = async (id: number) => {
    try {
      await certificateService.delete(id)
      GetByLoginUserData(setResponseData);
      handleCloseModal();
    }
    catch (error) {
      console.error("Veri silme sırasında bir hata oluştu:", error);
    }
  }

  const handleInfoClick = (desc:any) => {
    setModalData(desc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Col xs={12} lg={9} style={{ minHeight: "90vh" }}>
      <Row>
        <div className="section-header">
          <span className="header-text">Sertifikalarım</span>
        </div>
        <div className='col-12 tobeto-light-bg '>
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
        </div>
        <div className="table-responsive-sm">
          <table className="mt-8 corpTable table table-hover">
            <thead>
              <tr>
                <th>Dosya Adı</th>
                <th className="text-center">Dosya Türü</th>
                <th>Tarih</th>
                <th style={{ textAlign: "center" }}>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {responseData.certificates.map((data: any) => (
                <tr>
                  <td>{data.fileName}</td>
                  <td className="png_icon text-center" />
                  <td>09.10.2023</td>
                  <td
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 15
                    }}
                  >
                    <Link to={data.path} className=" fileIcon"></Link>
                    <span className=" trashIcon"onClick={() => handleInfoClick(data.id)} />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
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
                  Seçilen sertifikayı silmek istediğinize emin misiniz?
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


      </Row>
    </Col>
  );
}

export default Certificates;
