import { Col, Row,Button } from 'react-bootstrap';

const Info = () => {
  return (
    <>
    <Row className="bg-darkblue">
      <Col xs={12} className="d-flex justify-content-center p-10 istkaLogo">
        <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
          <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27421%27%20height=%27164%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
          </span>
          <img src="../../src/assets/png/istanbul-kodluyor-banner.png" alt="İstanbul Kodluyor Banner" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
        </span>
      </Col>
      <Col xs={12} className="d-flex flex-column justify-content-center px-10 text-center">
        <span className="header-text-md mt-4">Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
        <span className="header-text mt-8 mb-10">Aradığın <span className="quot">&nbsp;“</span>İş<span className="quot">”&nbsp;</span> Burada!</span>
      </Col>
    </Row>
     <Row className="bg-lightgreen p-0">
     <Col xs={12} className="istka-md-text">
       <span>Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor” Projesi&nbsp;</span>
     </Col>
     <Col xs={12} className="px-md-20 px-sm-0 text-center">
       <p className="istka-sm-text mmt-0">Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonunda İstanbul Kalkınma Ajansı (İSTKA) ve İngiltere merkezli Bridges Outcomes Partnerships iş birliğinde başladı!</p>
     </Col>
   </Row>
   <Row>
      <Col xs={12} className="bg-lightgray d-flex flex-row">
        <Button href="/istanbul-kodluyor#sss" className="btn big-btn-primary w-50 my-20">
          Sıkça Sorulan Sorular
        </Button>
        <Button href="/platform" className="btn big-btn-primary w-50 my-20">
          Platforma Git
        </Button>
      </Col>
    </Row>
   <Row className="bg-lightgreen">
      <Col xs={12} className="header-left-2">
        <span className="header-left-text">İstanbul Kodluyor Projesi Hakkında</span>
      </Col>
      <Col xs={12} className="mt-8">
        <p>
          <b>Yazılım ve teknoloji</b> alanında meslek sahibi olmak isteyen genç yetişkinlere, <b>ücretsiz ve kapsamlı eğitimlerle</b> gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında <b>işe yerleşmelerini</b> sağlayan bir projedir.
          Teknoloji alanında nitelikli insan kaynağını geliştirmeyi amaçlayan bu proje, aynı zamanda <b>kadınların</b> sektördeki temsiliyetini artırmayı da hedeflemektedir.
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
                  <p>Başvuru ve <br /> Ön-değerlendirme</p>
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
        <span className="neontext">Yazılım ve Teknoloji Alanında Meslek Edinmeye Yönelik Eğitimler</span>
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
   </>
  );
};


export default Info;
