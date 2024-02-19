import { Col, Image, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./LeftProfile.css";
import GetAllUserSkill, { defaultGetAllUserSkill } from "../../../models/response/userSkill/GetAllUserSkill";
import Paginate from "../../../models/paginate";
import userSkillService from "../../../services/userSkillService";
import tokenDecode from "../../../hooks/tokenDecode";


interface Props {
  responseData: any;
}

const LeftProfile = (props: Props) => {
  const { responseData } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [userSkill, setUserSkill] = useState<Paginate<GetAllUserSkill>>({ items: [defaultGetAllUserSkill] });
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  const fetchData = async () => {
    try {
      await userSkillService.getByUserId(tokenDecode().ID).then(
        (res) => {
          if (res.status === 200) {
            setUserSkill(res.data)
            console.log(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {userSkill.items.map((skill: any) => (
              <div className="skill mb-4">{skill.skillName}</div>
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

                <div className="profile-picture-container">
                  {!loaded && <div className="loading">Yükleniyor...</div>}
                  <img
                    src={responseData.imagePath}
                    alt="Profile"
                    className={`rounded-circle profile-picture ${loaded ? 'visible' : 'hidden'}`} 
                    onLoad={handleImageLoaded}
                  />
                </div>

             
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
                  {userSkill.items.map((skill: any) => (
                    <span className="skill">{skill.skillName}</span>
                  ))}
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
                responseData.userLanguages.map((data: any) => (
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
                  responseData.userSocialMedias.map((data: any) => (
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
