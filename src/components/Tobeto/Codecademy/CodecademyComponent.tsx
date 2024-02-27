import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const CodecademyComponent: React.FC = () => {
  return (
    <section className="py-24" style={{ background: "rgb(28, 25, 23)", marginTop:70 }} >
      <Container >
        <Row>
          <Col>
            <p className="ca-header" style={{ background: "rgb(28, 25, 23)" }}>
              Kodlama, pek çok olasılığı içinde barındıran bir dünya. <br />{" "}
              Başlamak için tek gereken ise merak ve öğrenme dürtüsü.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="ca-content1">
            <div>
              <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
                <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
                  <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27225%27%20height=%27225%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
                </span>
                <img alt="codecademy" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=256&q=75" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=640&q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
              </span>
            </div>
            <div>
              <p style={{ background: "rgb(28, 25, 23)" }}>
                Dünya çapında milyonlarca insanın günümüz dijital dünyasında başarılı olmak için ihtiyaç duyduğu becerileri eğlenceli bir şekilde edinmelerine olanak sağlayan{" "}
                <a href="https://www.codecademy.com/">Codecademy* </a>içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
              </p>
              <p className="casub-text" style={{ background: "rgb(28, 25, 23)" }}>
                *Codecademy; 2011'den beri, 50 milyondan fazla üyenin kendi için yeni bir yaşam ve kariyer geliştirmesine, projelerini hayata geçirmesine yardımcı olan bir kodlama eğitimi platformudur.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-8">
          <Col>
            <p className="ca-header-left " style={{ background: "rgb(28, 25, 23)" }}>Codecademy &amp; Tobeto </p>
            <p className="ca-text" style={{ background: "rgb(28, 25, 23)" }}>
              Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile erişebilirsin.
              <br />
              <br />
              Aboneliğin sağlayacağı Türkçe
              <b>canlı dersler</b>, alanında uzman eğitmenler ve öğrenmeni
              kolaylaştıracak <b>mentör</b> desteğiyle ile öğrenmeni destekleyici
              kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin
              yanında!
            </p>
            <Button variant="primary">Hemen Abone Ol!</Button>
          </Col>
        </Row>
      </Container>
      <div className="w-100 mt-20" style={{ backgroundColor: "rgb(24,20,52)" }}>
        <Container>
          <Row>
            <Col>
              <div className=" cagif">
                <div className=" ">
                  <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
                      <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271216%27%20height=%27684%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
                    </span>
                    <img
                      srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=1920&q=75"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=3840&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="py-20">
          <Col>
            <div className="teams-vector" />
            <span className="ca-header-left " style={{ background: "rgb(28, 25, 23)" }}>
              Şimdi <br /> Codecademy'nin <br /> zengin kataloğu ile :
            </span>
            <p className="ca-text mt-10" style={{ background: "rgb(28, 25, 23)" }}>
              Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al,
              etkileşimle yaparak öğren. Öğrenme deneyimine destek için makaleler,
              videolar ve projelerden faydalan.
            </p>
            <Button variant="primary" className="mt-10 w-auto ms-3">
              Hemen Abone Ol!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CodecademyComponent;
