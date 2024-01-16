import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SideMenu() {
  const location: any = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <Col md={3} lg={3} className="mb-8 mb-lg-0 ">
        <div className="p-2 py-4 ">
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/kisisel-bilgilerim" ? "active-edit" : "")} href="/profilimi-duzenle/kisisel-bilgilerim">
            <span className="personel-informations" />
            <span className="sidebar-text">Kişisel Bilgilerim</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/deneyimlerim" ? "active-edit" : "")} href="/profilimi-duzenle/deneyimlerim">
            <span className="experience" />
            <span className="sidebar-text">Deneyimlerim</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/egitim-hayatim" ? "active-edit" : "")} href="/profilimi-duzenle/egitim-hayatim">
            <span className="educations" />
            <span className="sidebar-text">Eğitim Hayatım</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/yetkinliklerim" ? "active-edit" : "")} href="/profilimi-duzenle/yetkinliklerim">
            <span className="abilities" />
            <span className="sidebar-text">Yetkinliklerim</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/sertifikalarım" ? "active-edit" : "")} href="/profilimi-duzenle/sertifikalarım">

            <span className="certificates" />
            <span className="sidebar-text">Sertifikalarım</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/medya-hesaplarim" ? "active-edit" : "")} href="/profilimi-duzenle/medya-hesaplarim">
            <span className="languages" />
            <span className="sidebar-text">Medya Hesaplarım</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/yabanci-dillerim" ? "active-edit" : "")} href="/profilimi-duzenle/yabanci-dillerim">
            <span className="languages2" />
            <span className="sidebar-text">Yabancı Dillerim</span>
          </a>
          <a className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/ayarlar" ? "active-edit" : "")} href="/profilimi-duzenle/ayarlar">
            <span className="settings" />
            <span className="sidebar-text">Ayarlar</span>
          </a>
        </div>
      </Col>
    </>
  );
};

export default SideMenu;
