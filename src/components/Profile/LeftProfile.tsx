import { Col, Image } from 'react-bootstrap';
import tokenDecode from '../../hooks/tokenDecode';

const LeftProfile = () => {
  return (
    <Col md={4} xs={12}>
    <div className="row">
      <Col xs={12}>
        <div className="cv-box">
          <div className="cv-pp">
            <div className="area">
              <ul className="circles">
                <li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li>
              </ul>
            </div>
            <Image
              alt=""
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&amp;w=256&amp;q=75"
              decoding="async"
              className="cv-pp-img rounded-circle"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&amp;w=256&amp;q=75 2x"
            />
          </div>
          <div className="cv-info cv-padding">
            <div className="info-box">
              <div className="info-icon name"></div>
              <div className="info-text">
                <span className="header">Ad Soyad</span>
                <span className="text">{tokenDecode().Name}</span>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon date"></div>
              <div className="info-text">
                <span className="header">Doğum Tarihi</span>
                <span className="text">01.01.1995</span>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon mail"></div>
              <div className="info-text">
                <span className="header">E-Posta Adresi</span>
                <span className="text">{tokenDecode().Email}</span>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon phone"></div>
              <div className="info-text">
                <span className="header">Telefon Numarası</span>
                <span className="text">+905531110000</span>
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
          <div>Kendini kısaca anlat</div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="cv-box cv-padding">
          <div className="cv-box-header">
            <div className="d-flex justify-content-between">
              <span>Yetkinliklerim</span>
              <span className="cv-see-icon"></span>
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
          <div className="my-langs">
            <div className="lang w-100">
              <div className="lang-info">
                <div className="lang-title ">
                  <div className="d-flex flex-column">
                    <span className="lang-name">İngilizce</span>
                    <span className="lang-degree">İngilizce Seviyesi</span>
                  </div>
                </div>
              </div>
              <span className="lang-degree-symbol main-lang"></span>
            </div>
          </div>
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
              <span id="certificate_name" className="skill d-flex justify-content-between">
                <span className="me-2 text-truncate">Bilgi_Teknolojilerine_Giri__Sertifika</span>
                <span className="me-0 pdf_icon text - center"></span>
              </span>
              <span id="certificate_name" className="skill d-flex justify-content-between">
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
            <a className="cv-linkedin" target="_blank" href="https://www.linkedin.com/in/altintoprakbeyza/"></a>
          </div>
        </div>
      </Col>
    </div>
  </Col>
  )
}
export default LeftProfile
