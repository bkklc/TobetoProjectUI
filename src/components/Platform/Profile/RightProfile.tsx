import { Row, Col, Badge } from "react-bootstrap";
import ActivityMap from "./ActivityMap";
import { useEffect, useState } from "react";
import Paginate from "../../../models/paginate";
import GetAllExperience, {
  defaultGetAllExperience,
} from "../../../models/response/experience/GetAllExperience";
import experienceService from "../../../services/experienceService";
import tokenDecode from "../../../hooks/tokenDecode";
import GetByLoginUserData from "../../../hooks/getByIdUserHook";
import GetByIdResponseUser, {
  defaultUser,
} from "../../../models/response/user/GetByIdResponseUser";

const ProfileRight = () => {
  const [userExperience, setUserExperience] = useState<
    Paginate<GetAllExperience>
  >({ items: [defaultGetAllExperience] });

  const [responseData, setResponseData] =
    useState<GetByIdResponseUser>(defaultUser);

  const fetchData = async () => {
    try {
      await experienceService.getByUserId(tokenDecode().ID).then((res) => {
        if (res.status === 200) {
          setUserExperience(res.data);
        }
      });
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
    GetByLoginUserData(setResponseData);
  }, []);

  return (
    <Col md={8} xs={12}>
      <div className="d-flex justify-content-end"></div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto İşte Başarı Modelim</span>
            <span className="cv-see-icon"></span>
          </div>
          <hr />
        </div>
        <div className="model-padding">
          <Row>
            <Col md={6} xs={12} className="my-3">
              <img src="/chart.png" />
            </Col>
            <Col md={6} xs={12} className="d-flex my-3">
              
                <div className="radar-labels">
                  <div className="label">
                    <span className="legend legend8">4</span>
                    <span className="legendName">
                      Yeni dünyaya hazırlanıyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend7">4.5</span>
                    <span className="legendName">
                      Profesyonel duruşumu geliştiriyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend1">4.5</span>
                    <span className="legendName">
                      Kendimi tanıyor ve yönetiyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend5">4.2</span>
                    <span className="legendName">
                      Yaratıcı ve doğru çözümler geliştiriyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend4">4.3</span>
                    <span className="legendName">
                      Başkaları ile birlikte çalışıyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend2">4.4</span>
                    <span className="legendName">
                      Kendimi sürekli geliştiriyorum
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend6">4.2</span>
                    <span className="legendName">
                      Sonuç ve başarı odaklıyım
                    </span>
                  </div>
                  <div className="label">
                    <span className="legend legend3">4.8</span>
                    <span className="legendName">
                      Anlıyorum ve anlaşılıyorum
                    </span>
                  </div>
                </div>
              
            </Col>
          </Row>
        </div>
      </div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto Seviye Testlerim</span>
          </div>
          <hr />
        </div>
        <Row className="g-4">
          <div className="envantoryList">
            <div className=" envantory-result">
              <div className="d-flex justify-content-between w-100">
                <span className="examName">Front End</span>
                <span className="examTime">04-09-2023</span>
              </div>
              <span className="examResult">80.00</span>
            </div>
            <div className=" envantory-result">
              <div className="d-flex justify-content-between w-100">
                <span className="examName">
                  Herkes için Kodlama 1C Değerlendirme Sınavı
                </span>
                <span className="examTime">11-10-2023</span>
              </div>
              <span className="examResult">92.00</span>
            </div>
          </div>
        </Row>
      </div>

      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Yetkinlik Rozetlerim</span>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-start badge-container">
          <Badge className="badge-card" bg="white">
            <img
              className="img-fluid"
              alt=""
              src="https://tobeto.s3.cloud.ngn.com.tr/45_0012252ba6.jpg"
            />
          </Badge>
          <Badge className="badge-card" bg="white">
            <img
              className="img-fluid"
              src="https://tobeto.s3.cloud.ngn.com.tr/47_7fc3123c74.jpg"
              alt=""
            />
          </Badge>
        </div>
      </div>
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Aktivite Haritam</span>
          </div>
          <hr />
          <ActivityMap />
        </div>
      </div>
      <div>
        <div className="col-12">
          <div className="cv-box cv-padding">
            <div className="cv-box-header">
              <div className="d-flex justify-content-between">
                <span>Eğitim Hayatım ve Deneyimlerim</span>
              </div>
              <hr />
            </div>
            <div className="timeline">
              <div className="line">
                {responseData.educations.map((education: any) => (
                  <div className="circle">
                    <div className=" before">
                      <div className="content">
                        <ul>
                          <li>
                            {" "}
                            {parseInt(education.startDate.slice(0, 4))} {"/"}{" "}
                            {parseInt(education.endDate.slice(0, 4))}{" "}
                          </li>
                          <li className="text-truncate">
                            {education.schoolNameName}
                          </li>
                          <li className="text-truncate">
                            {education.department}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                {userExperience.items.map((experience: any) => (
                  <div className="circle2 ">
                    <div className=" after">
                      <div className="content">
                        <ul>
                          <li>
                            {" "}
                            {parseInt(experience.startDate.slice(0, 4))} {"/"}{" "}
                            {parseInt(experience.endDate.slice(0, 4))}{" "}
                          </li>
                          <li className="text-truncate">
                            {experience.companyName}
                          </li>
                          <li className="text-truncate">
                            {experience.position}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProfileRight;
