import { Col, Row, Button, Container } from "react-bootstrap";
import Questions from "./Questions";

const Info = () => {

  const scrollToQuestions = () => {
    const questionsElement = document.getElementById('Questions'); 
    if (questionsElement) {
      questionsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function clickTrainings() {
    alert("Öne çıkan eğitimler");
  }
  return (
    <>
      <Row className="bg-darkblue">
        <Col xs={12} className="d-flex justify-content-center p-10 istkaLogo">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27421%27%20height=%27164%27/%3e"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </span>
            <img
              src="../../src/assets/png/istanbul-kodluyor-banner.png"
              alt="İstanbul Kodluyor Banner"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
          </span>
        </Col>
        <Col
          xs={12}
          className="d-flex flex-column justify-content-center px-10 text-center"
        >
          <span className="header-text-md mt-4">
            Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
          </span>
          <span className="header-text mt-8 mb-10">
            Aradığın <span className="quot">&nbsp;“</span>İş
            <span className="quot">”&nbsp;</span> Burada!
          </span>
        </Col>
      </Row>
      <Row className="bg-lightgreen p-0">
        <Col xs={12} className="istka-md-text">
          <span>
            Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor”
            Projesi&nbsp;
          </span>
        </Col>
        <Col xs={12} className="px-md-20 px-sm-0 text-center">
          <p className="istka-sm-text mmt-0">
            Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü
            koordinasyonunda İstanbul Kalkınma Ajansı (İSTKA) ve İngiltere
            merkezli Bridges Outcomes Partnerships iş birliğinde başladı!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="bg-lightgray d-flex flex-row">
          <Button
            
            onClick={scrollToQuestions}
            className="btn big-btn-primary w-50 my-20"
          >
            Sıkça Sorulan Sorular
          </Button>
          <Button href="/platform" className="btn big-btn-primary w-50 my-20">
            Platforma Git
          </Button>
        </Col>
      </Row>
      <Row className="bg-lightgreen">
        <Col xs={12} className="header-left-2">
          <span className="header-left-text">
            İstanbul Kodluyor Projesi Hakkında
          </span>
        </Col>
        <Col xs={12} className="mt-8">
          <p>
            <b>Yazılım ve teknoloji</b> alanında meslek sahibi olmak isteyen
            genç yetişkinlere, <b>ücretsiz ve kapsamlı eğitimlerle</b> gerekli
            bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında{" "}
            <b>işe yerleşmelerini</b> sağlayan bir projedir. Teknoloji alanında
            nitelikli insan kaynağını geliştirmeyi amaçlayan bu proje, aynı
            zamanda <b>kadınların</b> sektördeki temsiliyetini artırmayı da
            hedeflemektedir.
          </p>
        </Col>
      </Row>
      <Row className="bg-darkblue p-10">
        <span className="text-neon">SÜREÇ</span>
        <Col xs={12} className="position-relative text-center">
          <section className="ps-timeline-sec">
            <div className="container-fluid">
              <ol className="ps-timeline">
                <li>
                  <div className="ps-top">
                    <p>
                      Başvuru ve <br /> Ön-değerlendirme
                    </p>
                  </div>
                  <span className="ps-sp-top">1</span>
                </li>
                <li>
                  <div className="ps-bot">
                    <p>"Herkes için Kodlama" Eğitimleri</p>
                  </div>
                  <span className="ps-sp-bot">2</span>
                </li>
                <li>
                  <div className="ps-top">
                    <p>Seçme ve Değerlendirme</p>
                  </div>
                  <span className="ps-sp-top">3</span>
                </li>
                <li>
                  <div className="ps-bot">
                    <p>Mesleki ve Profesyonel Gelişim Eğitimleri</p>
                  </div>
                  <span className="ps-sp-bot">4</span>
                </li>
                <li>
                  <div className="ps-top">
                    <p>İstihdam</p>
                  </div>
                  <span className="ps-sp-top">5</span>
                </li>
              </ol>
            </div>
          </section>
        </Col>
      </Row>
      <Row className="bg-neongreen">
        <Col className="header-right-2">
          <span className="header-right-text">İstihdama Giden Yol</span>
        </Col>
        <Col xs={12} className="mt-20 text-center-mobil">
          <span className="neontext">
            Yazılım ve Teknoloji Alanında Meslek Edinmeye Yönelik Eğitimler
          </span>
          <div className="detailList">
            <div className="list">
              <span>Mesleki Eğitimler</span>
              <ul>
                <li>Online Canlı Dersler</li>
                <li>Video İçerikler</li>
                <li>İstanbul’da Kampüs Buluşmaları</li>
                <li>Proje Uygulamaları</li>
              </ul>
            </div>
            <div>
              <span className="plusIcon">+</span>
            </div>
            <div className="list">
              <span>Profesyonel Gelişim Eğitimleri</span>
              <ul>
                <li>İşte Başarı Eğitimleri</li>
                <li>Sektör Buluşmaları ve Webinarlar</li>
                <li>Kariyer Gelişim Desteği</li>
                <li>Mentörlük</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="bg-lightgray">
        <Col xs={12} className="mt-10 text-center">
          <span className="text-neon">ÖNE ÇIKAN EĞİTİMLER</span>
          <img
            className="cursor-pointer"
            onClick={clickTrainings}
            src="../../src/assets/png/featured-trainings.png"
            alt="İ"
            decoding="async"
            data-nimg="intrinsic"
            style={{
              maxWidth: "100%",
            }}
          />
        </Col>
      </Row>
      <Row className="bg-lightgreen">
        <div className="header-left-2">
          <span className="header-left-text">Sen de hemen başvur!</span>
        </div>
        <Row className="ps-md-40 ps-sm-0">
          <Col
            md={3}
            xs={12}
            className="d-flex align-items-center justify-content-center"
          >
            <span
              className="text-right right-line"
              style={{
                fontSize: "3em",
                fontWeight: 600,
                paddingTop: "2em",
                color: "rgb(255, 255, 255)",
              }}
            >
              Yazılım ve Teknoloji Alanında
            </span>
          </Col>
          <Col md={9} xs={12} className="mt-8 reg-sec">
            <div>
              <span className="number">1</span>
              <span className="text">Ücretsiz eğitim al</span>
            </div>
            <div>
              <span className="number">2</span>
              <span className="text">Profesyonel yetkinlikler kazan</span>
            </div>
            <div>
              <span className="number">3</span>
              <span className="text">Yeni mesleğinle işe başla!</span>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="bg-grey pb-0">
        <Col
          xs={12}
          className="text-center-mobil px-md-10 px-sm-0 pt-md-10 pt-sm-0"
        >
          <span className="text-grey">Bu Proje Nasıl Destekleniyor?</span>
          <p className="px-20 py-10" style={{ fontSize: "1.5em" }}>
            <b>İstanbul Kodluyor</b>, Türkiye’nin ilk sosyal etki tahvili
            projesidir. Sosyal etki tahvilleri, sosyal sorunlara çözüm bulan,
            performansa dayalı sözleşmelerdir ve ölçülebilir, pozitif, sosyal ve
            çevresel etki yaratacak sonuçlara ulaşılmayı amaçlamaktadır.
          </p>
        </Col>
      </Row>
      <Row className="bg-grey pt-0">
        <Col xs={12} className="text-center p-10">
          <div className="partners mt-10">
            <div>
              <img
                alt="Sanayi ve Teknoloji Bakanlığı Logo"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstb.02c86f02.png&w=3840&q=75"
                className="brandss"
              />
            </div>
            <div>
              <img
                alt="İstanbul Kalkınma Ajansı Logo"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fistka.08116c01.png&w=3840&q=75"
                className="brandss"
              />
            </div>
            <div>
              <img
                alt="Bridges of Internship Logo"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboi.42ec6b80.png&w=256&q=75"
                className="brandss"
              />
            </div>
            <div>
              <img
                alt="ETKİ Logo"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fetki.8886e8e3.png&w=640&q=75"
                className="brandss"
              />
            </div>
          </div>
          <div className="partners mt-20">
            <div>
              <img
                alt="enocta"
                src="https://tobeto.com/_next/static/media/enocta-logo.ec253fa2.svg"
                className="brandss"
              />
            </div>
            <div>
              <img
                alt="tobeto"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75"
                className="brandss"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <Col className="sss-banner2 py-8">
            <h1 className="ch-text text-center" id="Questions">Sıkça Sorulan Sorular</h1>
          </Col>
        </Row>
        <div className="px-20">
          <Questions />
        </div>
      </Container>
    </>
  );
};

export default Info;
