import React from "react";
import { Col, Container } from "react-bootstrap";

const ProfileInfo = () => {
  return (
    <Container>
      <Col md={12} className="col-lg-3 mb-8 mb-lg-0">
        <div className="p-2 py-4 mobile-sidebar">
          <a className="btn mb-2 text-start w-100 sidebar-link " href="#">
            <span className="personel-informations" />
            <span className="sidebar-text">Kişisel Bilgilerim</span>
          </a>
          <a
            className="btn mb-2 text-start w-100  sidebar-link active-edit"
            href="#"
          >
            <span className="experience" />
            <span className="sidebar-text">Deneyimlerim</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="educations" />
            <span className="sidebar-text">Eğitim Hayatım</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="abilities" />
            <span className="sidebar-text">Yetkinliklerim</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="certificates" />
            <span className="sidebar-text">Sertifikalarım</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="languages" />
            <span className="sidebar-text">Medya Hesaplarım</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="languages2" />
            <span className="sidebar-text">Yabancı Dillerim</span>
          </a>
          <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
            <span className="settings" />
            <span className="sidebar-text">Ayarlar</span>
          </a>
        </div>
      </Col>
    </Container>
  );
};

export default ProfileInfo;
