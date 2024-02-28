
import { Container, Row } from "react-bootstrap";

const TobetoHomePage = () => {
  return (
    <main className="bg-front-dark">
      <Container className="container ">
        <Row>
          <div className="col-md-6 col-12 mt-40 ">
            <div className="tobeto-card">
              <span>Hayalindeki teknoloji kariyerini başlat!</span>
              <span style={{ display: "flex", fontStyle: "italic" }}>
                İstediğin
                <div className="word-container">
                  <span className="word1">&nbsp;yoldan</span>
                  <span className="word2">&nbsp;hızda</span>
                </div>
              </span>
              <a
                className="btn d-md-inline-block mt-5 btn-secondary"
                href="/kayit-ol"
              >
                Ücretsiz Üye Ol
              </a>
              <div className="person">
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
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27610%27%20height=%27600%27/%3e"
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
                    srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75 2x"
                    src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"
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
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-40">
            <div className="ik-card">
              <div className="ik-container">
                <div className="header-left-3">
                  <span className="text-ik fw-bold header-left-text">
                    Aradığın{" "}
                    <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>
                    İş<span style={{ color: "rgb(0, 176, 120)" }}>
                      "&nbsp;
                    </span>{" "}
                    Burada!
                  </span>
                </div>
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
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27100%27/%3e"
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
                    alt="İstanbul Kodluyor Logo "
                    src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="px-4"
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
                    srcSet="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 1x, https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 2x"
                  />
                  <noscript />
                </span>
              </div>
              <a
                className="btn d-md-inline-block mt-5 btn-blue"
                href="/istanbul-kodluyor"
              >
                Başvur
              </a>
            </div>
          </div>
        </Row>
      </Container>
      <div className="gradient-line2 mt-10" />

      <div>
        <div className="raw-html-embed">
          <div className="raw-html-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                            .ca {\n                                border-radius: 12px;\n                                border: 3px solid #93f;\n                                padding: 2em 5% 0.75em 9%;\n                                margin: 0em auto 4em auto;\n                                align-items: center;\n                            }\n                            .ca span {\n                                font-size: 2em;\n                                font-weight: 600;\n                                color: #fff;\n                            }\n                            .ca p {\n                                font-size: 1.5em;\n                                font-weight: 500;\n                                color: #fff;\n                                margin-top: 2em;\n                            }\n                            .navbar {\n                                top: 70px !important;\n                            }\n                        ",
              }}
            />
            <div className="container">
              {/*
              
      <div class="row align-items-center mb-12 mobile-pt-6 pt-52">
                      
          <div class="col-12 col-lg-7 col-sm-6 mb-10 mb-lg-0">
                              
              <div class="mw-4xl">
                                      
                  <h1 class="d-block text-white" contenteditable="false" style="font-size:3em !important;">
                                                                                                  Hayalindekia
                                              
                      <br>
                                                                                                  teknoloji kariyerini
                                              
                      <br>
                                                                                                  başlat!
                                              
                      <br>
                                          
                  </h1>
                                      
                  <h2 class="text-white mt-5 mb-5 d-flex flex-start">
                                                                                                  <span class="text-secondary fst-italic">istediğin</span>
                                              
                      <div class="word-container">
                                                                                                                  <span class="word1">&nbsp;yoldan</span>
                                                                                                                  <span class="word2">&nbsp;hızda</span>
                                                  
                      </div>
                                          
                  </h2>
                                                                                  <link href="/kayit-ol">
                                                                                  <a class="btn d-md-inline-block mt-5 mx-2 btn-secondary" href="/kayit-ol">Ücretsiz Üye Ol</a>
                                  
              </div>
                          
          </div>
                      
          <div class="col-12 col-lg-5 col-sm-6 ms-auto">
                                                                  <img src="https://tobeto.s3.cloud.ngn.com.tr/BANNER_12_1b0ff28187.png?updated_at=2022-08-02T16:35:42.519Z"
                                                                      alt="" class="w-100 mobile-w-90">
                          
          </div>
                  
      </div>
                       */}
              <div className="row py-20 ">
                <div className="col-lg-5 col-12">
                  <h3 className="text-white">
                    Hangi Konuda Kendini
                    <br />
                    Geliştirmek İstersin?
                  </h3>
                  <div
                    className="nav flex-column nav-pills me-3 my-14"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="tab-button active mb-5"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="title">
                        Teknik ve Profesyonel Eğitimler
                      </div>
                      <div className="desc">
                        Kapsamlı beceri setlerinden, gelişmek istediğin konuyu
                        seç, kariyerinde bir adım öne geç.
                      </div>
                    </button>
                    <button
                      className="tab-button"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="title">Yeni bir meslek</div>
                      <div className="desc">
                        İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan
                        eğitim yolculuğunu seç, yazılım veya profesyonel iş
                        alanlarında tercih ettiğin yeni mesleğine doğru ilk
                        adımını at.
                      </div>
                    </button>
                  </div>
                </div>
                <div className="col-lg-1 col-12"></div>
                <div className="col-lg-6 col-12 tabs-content">
                  <div className="tab-vector">
                    <img
                      src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active tabs-pane"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5 position-relative"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Object Oriented Programming (OOP)
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5 position-relative"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Microsoft SQL Server Database
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            HTML-CSS-SASS
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Javascript
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            ASPNET Core MVC
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5 position-relative"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            C# Programming
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade tabs-pane"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Full Stack Developer
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Front End Developer
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <a
                            className="tabs-box mb-5"
                            style={{
                              color: "#000!important",
                              textDecoration: "none",
                            }}
                          >
                            Web &amp; Mobile Developer{" "}
                          </a>
                        </div>
                        <div className="col-lg-6 col-6">
                          <div className="tabs-box mb-5">
                            Siber
                            <br />
                            Güvenlik Uzmanı
                            <div className="overlay2">
                              <div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
                                <img
                                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z"
                                  alt=""
                                  className="w-35"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-6">
                          <div className="tabs-box mb-5">
                            Veri
                            <br />
                            Bilimi Uzmanı
                            <div className="overlay2">
                              <div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
                                <img
                                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z"
                                  alt=""
                                  className="w-35"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-6">
                          <div className="tabs-box mb-5">
                            UI/UX
                            <br />
                            Developer
                            <div className="overlay2">
                              <div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
                                <img
                                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z"
                                  alt=""
                                  className="w-35"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-10 d-flex justify-content-end">
                  <a href="/katalog" className="tab-link mobile-mx-auto">
                    Tümünü İncele &gt;
                  </a>
                </div>
              </div>
            </div>
            <div className="container ca">
              <div className="d-flex" style={{ gap: "2em" }}>
                <div>
                  <img
                    src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z"
                    style={{ maxWidth: 172, height: "auto" }}
                  />
                </div>
                <div>
                  <span>
                    Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi
                    Tobeto deneyimi ile!
                  </span>
                </div>
              </div>
              <p>
                Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı
                avantajlar, alanında uzman eğitmenlerle canlı dersler ve
                mentörlerin desteği ile erişebilir, yeni kariyerine
                başlayabilirsin!
              </p>
            </div>
            <div className="container-fluid m-0 mp-0 section-three py-20">
              <div className="container">
                <div className="position-relative">
                  <p className="h6 px-10  mx-auto text-center text-white">
                    Tobeto Platform'da ücretsiz olarak; sahip olduğun
                    yetkinlikleri değerlendirir,
                    <br />
                    ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine
                    ulaşırsın. Bunları nasıl tamamlayacağını
                    <br />
                    hızına, bütçene ve zamanına göre kendin belirlersin.
                    <br />
                    <br />
                    Hemen ücretsiz üye ol, platforma katıl!
                  </p>
                  <div className="tab-vector3">
                    <img
                      src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z"
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="tab-vector2">
                    <img
                      src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z"
                      alt=""
                      width={75}
                      height={75}
                    />
                  </div>
                </div>
              </div>
            </div>
            <section className="headfarming-mobile">
              <div className="container">
                <div className="headfarming my-10">
                  <p className="h6 px-10  mx-auto text-center text-white">
                    Tobeto , 20. yy''ın “headhunting” yaklaşımını “headfarming”
                    olarak değiştirmeyi hedefler!
                    <br />
                    <br />
                    Headfarming: Genç yetenekleri, sürekli öğrenme hevesi içinde
                    olan profesyonelleri, 360 derece eğitmek, değerlendirmek,
                    yönlendirmek ve desteklemektir.
                  </p>
                </div>
              </div>
            </section>
            <div className="container-fluid py-8">
              <div className="container">
                <div
                  className="row d-flex align-items-center py-10"
                  style={{ background: "#2f2f2f!important", borderRadius: 25 }}
                >
                  <div className="col-lg-7 col-12 col-lg-order-first col-order-last">
                    <div className="mw-xxl mx-auto">
                      <img
                        src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 col-lg-order-first col-order-last">
                    <div className="mw-lg mx-auto mobile-text-center">
                      <h4 className="text-white ml-3">
                        Tobeto 'İşte Başarı Modeli'mizi Keşfet!
                      </h4>
                      <p className="d-block text-white ml-3 mt-6">
                        Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte
                        başarılı olma sürecinde gerekli 80 tane davranış
                        ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile,
                        profesyonellik yetkinliklerini ölç,
                        <br />
                        raporunu gör.
                      </p>
                      <link href="/kayit-ol" />
                      <a
                        className="btn d-md-inline-block mt-3 mx-2 btn-secondary"
                        href="/kayit-ol"
                      >
                        Hemen Başla
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-none-1200 brand-slider  mt-20">
        <div className="slide-track">
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=96&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27890%27%20height=%27188%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1080&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27246%27%20height=%2788%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27246%27%20height=%2788%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=640&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=640&q=75 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27246%27%20height=%2788%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="slide">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271031%27%20height=%27421%27/%3e"
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
                alt=""
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=3840&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="img-fluid"
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
                srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=3840&q=75 2x"
              />
              
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TobetoHomePage;
