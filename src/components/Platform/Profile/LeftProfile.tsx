import { Col, Image, Modal } from "react-bootstrap";
import {  useEffect, useState } from "react";
import "./LeftProfile.css";
import GetAllImage from "../../../models/response/image/GetAllImage";
import GetByIdImage from "../../../models/response/image/GetByIdImage";
import imageService from "../../../services/imageService";

interface Props {
  responseData: any;
  profilePhoto: any;
}

const LeftProfile = (props: Props) => {
  const { responseData,profilePhoto } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const competencies = [
    "Html",
    "Css",
    "Javascript",
    "Git",
    "Github",
    "C#",
    "SQL ",
  ];

  return (
    <>
      {isOpenModal && (
        <Modal
          show={isOpenModal}
          onHide={handleIsOpenModal}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="title">Tüm Yetkinliklerim</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {competencies.map((competency) => (
              <div className="skill mb-4">{competency}</div>
            ))}
          </Modal.Body>
        </Modal>
      )}

      <Col md={4} xs={12}>
        <div className="row">
          <Col xs={12}>
            <div className="cv-box">
              <div className="cv-pp">
                <div className="area">
                  <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <Image
                  alt=""
                  src={profilePhoto.path}
                  width={128}
                  height={128}
                  decoding="async"
                  className="cv-pp-img rounded-circle"                />
              </div>
              <div className="cv-info cv-padding">
                <div className="info-box">
                  <div className="info-icon name"></div>
                  <div className="info-text">
                    <span className="header">Ad Soyad</span>
                    <span className="text">
                      {
                        responseData.firstName + " " + responseData.lastName}
                    </span>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-icon date"></div>
                  <div className="info-text">
                    <span className="header">Doğum Tarihi</span>
                    <span className="text">
                      {responseData.birthDate.split("T")[0]}
                    </span>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-icon mail"></div>
                  <div className="info-text">
                    <span className="header">E-Posta Adresi</span>
                    <span className="text">
                      {responseData.email}
                    </span>
                  </div>
                </div>
                <div className="info-box">
                  <div className="info-icon phone"></div>
                  <div className="info-text">
                    <span className="header">Telefon Numarası</span>
                    <span className="text">
                      {responseData.phoneNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <span>Hakkımda</span>
                <hr />
              </div>
              <div>
                <span>{responseData.description}</span>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between">
                  <span>Yetkinliklerim</span>
                  <span
                    className="cv-see-icon"
                    onClick={handleIsOpenModal}
                  ></span>
                </div>
                <hr />
              </div>
              <div>
                <div className="skills">
                  <span className="skill">javascript</span>
                  <span className="skill">git</span>
                  <span className="skill">github</span>
                  <span className="skill">html</span>
                  <span className="skill">SQL</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between">
                  <span>Yabancı Dillerim</span>
                </div>
                <hr />
              </div>

              {
                responseData.userLanguages.map((data:any) => (
<div className="my-langs">
                <div className="lang w-100">
                  <div className="lang-info">
                    <div className="lang-title ">
                      <div className="d-flex flex-column">
                        <span className="lang-name">{data.languageName}</span>
                        <span className="lang-degree">{data.languageLevelName}</span>
                      </div>
                    </div>
                  </div>
                  <span className="lang-degree-symbol main-lang"></span>
                </div>
              </div>
                ))
              }
              
            </div>
          </Col>
          <Col xs={12}>
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <span>Sertifikalarım</span>
                <hr />
              </div>
              <div className="row">
                <div className="skills">
                  <span
                    id="certificate_name"
                    className="skill d-flex justify-content-between"
                  >
                    <span className="me-2 text-truncate">
                      Bilgi_Teknolojilerine_Giri__Sertifika
                    </span>
                    <span className="me-0 pdf_icon text - center"></span>
                  </span>
                  <span
                    id="certificate_name"
                    className="skill d-flex justify-content-between"
                  >
                    <span className="me-2 text-truncate">imagepng</span>
                    <span className="me-0 png_icon text - center"></span>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <span>Medya Hesaplarım</span>
                <hr />
              </div>
              <div className="cv-social-media">
                {
                  responseData.userSocialMedias.map((data:any) => (
<a
                  className={"cv-" + String(data.socialMediaName).toLocaleLowerCase('tr-TR')}
                  target="_blank"
                  href={data.url}
                ></a>
                  ))
                  }
                
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </>
  );
};
export default LeftProfile;
