import { Col, Row, Button, Container } from "react-bootstrap";
import Questions from "./Questions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "./Info.css";

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToQuestions = () => {
    const questionsElement = document.getElementById("Questions");
    if (questionsElement) {
      questionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  function clickTrainings() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
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
            <h1 className="ch-text text-center" id="Questions">
              Sıkça Sorulan Sorular
            </h1>
          </Col>
        </Row>
        <div className="px-20">
          <Questions />
        </div>
      </Container>

      <Modal className="modalWrapper" show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <img
            src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
            alt="istanbul-kodluyor"
            style={{
              width: "125px",
              marginLeft: "auto",
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <b>UI/UX Tasarımı</b>
          <p className="mt-1">
            UI/UX tasarımı eğitimi, kullanıcıların dijital ürünlerle
            etkileşimlerini optimize etmeyi öğretir. Katılımcılar, estetik ve
            kullanılabilirlik ilkeleriyle kullanıcı deneyimini iyileştirme
            konularında yetenekler kazanır. Bu eğitim, işlevselliği ve estetiği
            birleştirerek kullanıcıların memnuniyetini artırma hedefini taşır.
          </p>
          <b>Yazılım & Web Geliştirme</b>
          <p className="mt-1">
            Yazılım ve web geliştirme eğitimi, çeşitli programlama dilleri ve
            teknolojileri kullanarak web siteleri ve uygulamalar oluşturmayı
            öğretir. Katılımcılar, temel ve ileri seviye geliştirme yetenekleri
            kazanarak dijital ürünleri tasarlama ve hayata geçirme becerilerini
            geliştirirler.
          </p>
          <b>Siber Güvenlik </b>
          <p className="mt-1">
            Siber güvenlik eğitimi, dijital dünyada güvenliği sağlamayı
            amaçlayan stratejileri ve teknikleri öğretir. Katılımcılar, siber
            saldırılara karşı korunma, ağ güvenliği, etik hack teknikleri ve
            güvenlik önlemleri konularında bilgi sahibi olarak dijital
            varlıkları koruma yeteneklerini geliştirirler.
          </p>
          <b>Veri Bilimi </b>
          <p className="mt-1">
            Veri bilimi eğitimi, büyük veri setlerini analiz ederek anlamlı
            bilgiler çıkarmayı öğretir. Katılımcılar, veri madenciliği,
            istatistiksel analiz ve makine öğrenmesi gibi yöntemleri kullanarak
            veri tabanlı kararlar almayı ve iş süreçlerini optimize etmeyi
            öğrenirler.
          </p>
          <b>Bulut Yazılım</b>
          <p className="mt-1">
            Bulut yazılım eğitimi, bulut tabanlı hizmetlerle uygulama
            geliştirmeyi ve dağıtmayı öğretir. Katılımcılar, bulut altyapısını
            kullanarak ölçeklenebilir ve esnek uygulamalar oluşturmayı
            öğrenirler. Bu eğitim, işletmelerin kaynakları daha etkili bir
            şekilde yönetmelerine yardımcı olur.
          </p>
          <b>Mobil Uygulama</b>
          <p className="mt-1">
            Geliştirme Mobil uygulama geliştirme eğitimi, iOS ve Android
            platformlarında uygulama oluşturmayı öğretir. Katılımcılar, mobil
            uygulama tasarımı, kullanıcı deneyimi ve mobil platform özellikleri
            konularında bilgi sahibi olarak mobil uygulamalar geliştirme
            yeteneklerini geliştirirler.
          </p>
          <b>Sistem Geliştirme</b>
          <p className="mt-1">
            Sistem geliştirme eğitimi, bilişim sistemleri ve yazılım projeleri
            oluşturma süreçlerini öğretir. Katılımcılar, gereksinim analizi,
            tasarım, geliştirme ve test aşamalarını öğrenerek bütünsel bir bakış
            açısı kazanırlar.
          </p>
          <b>Oyun Geliştirme</b>
          <p className="mt-1">
            Oyun geliştirme eğitimi, video oyunlarının tasarımını ve
            geliştirilmesini öğretir. Katılımcılar, oyun motorları, grafik
            tasarımı, oyun mekaniği ve kullanıcı deneyimi konularında bilgi
            sahibi olarak eğlenceli ve etkileyici oyunlar yaratma yeteneklerini
            geliştirirler.
          </p>
          <b> Ağ ve Güvenlik</b>
          <p className="mt-1">
            Ağ ve güvenlik eğitimi, ağ altyapısını yönetme, ağ güvenliği
            stratejileri ve ağ yönetimi tekniklerini öğretir. Katılımcılar, ağ
            kurulumu, izleme, sorun giderme ve güvenlik protokollerini anlayarak
            ağ altyapısını koruma yeteneklerini geliştirirler.
          </p>
          <b>Dijital Pazarlama</b>
          <p className="mt-1">
            Dijital pazarlama eğitimi, çevrimiçi platformlarda marka bilinirliği
            oluşturmayı ve potansiyel müşterilere ulaşmayı öğretir.
            Katılımcılar, dijital reklamcılık, sosyal medya yönetimi, içerik
            stratejileri ve SEO teknikleri konularında bilgi sahibi olarak
            dijital pazarlama kampanyalarını etkili bir şekilde yönetebilirler.
          </p>
        </Modal.Body>
      </Modal>
      <Row>
        <Col className="sss-banner2 pt-8">
          <h1 className="ch-text text-center">Projeden Kareler</h1>
        </Col>
      </Row>
      <div className="row bg-white py-0">
        <div>
          <div className="gallery-wrapper mt-10">
            <div className="gallery-card">
              <figure className="card__thumbnail">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_41b41689ce.JPG"
                  alt="Kampüs buluşması 1"
                />
                <span className="card__title">Kampüs buluşması 1</span>
              </figure>
              <div className="overlay-bg"></div>
            </div>
            <div className="gallery-card">
              <figure className="card__thumbnail">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/DSC_06023_1491907961.JPG"
                  alt="Kampüs Buluşması 1"
                />
                <span className="card__title">Kampüs Buluşması 1</span>
              </figure>
              <div className="overlay-bg"></div>
            </div>
            <div className="gallery-card">
              <figure className="card__thumbnail">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/New_Project_2_daa103de14.jpg"
                  alt="Kampüs Buluşması 2"
                />
                <span className="card__title">Kampüs Buluşması 2</span>
              </figure>
              <div className="overlay-bg"></div>
            </div>
            <div className="gallery-card">
              <figure className="card__thumbnail">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/DSCF_3893_8edb49df7e.JPG"
                  alt="Feedback Session Meeting"
                />
                <span className="card__title">Feedback Session Meeting</span>
              </figure>
              <div className="overlay-bg"></div>
            </div>
          </div>
          <Link
            to="/istanbul-kodluyor/galeri"
            className="showMoreBtn mb-8 text-decoration-none"
          >
            Daha Fazla Göster
          </Link>
        </div>
      </div>
      <div className="row bg-darkblue">
        <div className="col-12 d-flex justify-content-center pt-10">
          <img
            src="../../src/assets/png/istanbul-kodluyor-banner.png"
            alt="İstanbul Kodluyor Logo"
            decoding="async"
            data-nimg="intrinsic"
            style={{ width: "480px", height: "180px" }}
          />
        </div>
        <div className="col-12 my-10 col-lg-auto text-center">
  <a
    className="text-decoration-none me-4"
    href="https://www.facebook.com/tobetoplatform"
    target="blank"
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
  <a
    className="text-decoration-none me-4"
    href="https://www.instagram.com/tobeto_official/"
    target="blank"
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 6.5H17.51"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
  <a
    className="text-decoration-none me-4"
    href="https://twitter.com/tobeto_platform"
    target="blank"
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
  <a
    className="text-decoration-none me-4"
    href="https://www.linkedin.com/company/tobeto/"
    target="blank"
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9H2V21H6V9Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
  <a
    className="text-decoration-none"
    href="mailto:istanbulkodluyor@tobeto.com"
    target="blank"
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
</div>

      </div>
    </>
  );
};

export default Info;
