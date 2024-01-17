import { useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SideMenu() {
  const location: any = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <Col md={3} lg={3} className="mb-8 mb-lg-0">
        <div className="p-2 py-4 mobile-sidebar">
          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/kisisel-bilgilerim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/kisisel-bilgilerim" ? "active-edit" : "")} >
              <span className="personel-informations" />
              <span className="sidebar-text">Kişisel Bilgilerim</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/deneyimlerim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/deneyimlerim" ? "active-edit" : "")} >
              <span className="experience" />
              <span className="sidebar-text">Deneyimlerim</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/egitim-hayatim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/egitim-hayatim" ? "active-edit" : "")} >
              <span className="educations" />
              <span className="sidebar-text">Eğitim Hayatım</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/yetkinliklerim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/yetkinliklerim" ? "active-edit" : "")} >
              <span className="abilities" />
              <span className="sidebar-text">Yetkinliklerim</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/sertifikalarim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/sertifikalarim" ? "active-edit" : "")} >
              <span className="certificates" />
              <span className="sidebar-text">Sertifikalarım</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/medya-hesaplarim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/medya-hesaplarim" ? "active-edit" : "")} >
              <span className="languages" />
              <span className="sidebar-text">Medya Hesaplarım</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/yabanci-dillerim"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/yabanci-dillerim" ? "active-edit" : "")} >
              <span className="languages2" />
              <span className="sidebar-text">Yabancı Dillerim</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to={"/profilimi-duzenle/ayarlar"} className={"btn mb-2 text-start w-100  sidebar-link " + (url === "/profilimi-duzenle/ayarlar" ? "active-edit" : "")} >
              <span className="settings" />
              <span className="sidebar-text">Ayarlar</span>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Col>
    </>
  );
};

export default SideMenu;
