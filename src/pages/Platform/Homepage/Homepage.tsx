import { Button, Card, Col, Container, Nav, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlatformTabs from "../../../components/Platform/Items/PlatformTabs";
import PageUrl from "../../../hooks/PageUrl";
import tokenDecode from "../../../hooks/tokenDecode";
import userService from "../../../services/userService";
import ResponseData from "../../../hooks/ResponseData";
import "./HomePage.css";

function Homepage() {
  const responseData = ResponseData(userService.getAll());

  console.log(responseData && responseData.items[0].firstName);

  const url = PageUrl();
  return (
    <main>
      <Stack gap={3}>
        <div className="py-5">
          <Container className="text-center">
            <div className="mw-5xl mx-auto">
              <h3>
                <span className="text-secondary"> TOBETO</span>
                <span className="fw-normal text-info">'ya</span>
                <span className="fw-normal text-info"> hoş geldin</span>
              </h3>
              <h4 className="fw-normal text-info mb-5">
                {tokenDecode().Name.split(" ")[0]}
              </h4>
              <p className="tobeto-slogan">
                Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                senin yanında!
              </p>
            </div>
          </Container>
        </div>
        <div className="my-2">
          <Container>
            <Row className="cv-box cv-padding display-flex mmt-n-4">
              <Col md={12} className="ik-logo-platform">
                <div className="p-4">
                  <span className="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                    <span className="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                      <img
                        alt=""
                        aria-hidden="true"
                        src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                        style={{}}
                      />
                    </span>
                  </span>
                </div>
                <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
                  <span className="header-text-md mt-4 ">
                    Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini
                    al.
                  </span>
                  <span className="header-text mt-4 mb-4">
                    Aradığın <span className="quot">&nbsp;“</span>İş
                    <span className="quot">”&nbsp;</span> Burada!
                  </span>
                </div>
              </Col>
              <Col md={12}>
                <PlatformTabs />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="asd">          
          <img
            alt=""
            src="/_next/static/media/dot-purple.e0e5c9d8.svg"
            decoding="async"
            data-nimg="intrinsic"
            srcSet="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 1x, https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 2x"
          />
        </div>

        <div className="my-2">
          <section className="my-2">
            <Container>
              <Row className="cv-box cv-padding">
                <Col md={12} className="position-relative">
                  <span className="exams-header">Sınavlarım</span>
                </Col>
                <div className="exams my-3">
                  <Card className="exam-card">
                    <div className="exam-header">
                      <span className="exam-name">
                        Herkes için Kodlama 1B Değerlendirme Sınavı
                      </span>
                      <span className="lesson-name">
                        Herkes İçin Kodlama - 1B
                      </span>
                    </div>
                    <div className="exam-details">
                      <div>
                        <span className="exam_time">45 Dakika</span>
                      </div>
                    </div>
                    <span className="status-done"></span>
                  </Card>
                </div>
              </Row>
            </Container>
          </section>
        </div>
        <div className="my-2">
          <div className="container">
            <div className="new-packs my-10">
              <div className="package-card">
                <div className="details pack-bg-2">
                  <h1>
                    <br /> Profilini oluştur{" "}
                  </h1>
                  <Button>
                    <Nav.Link
                      as={Link}
                      to={"/profilimi-duzenle/kisisel-bilgilerim"}
                      className={
                        url === "/profilimi-duzenle/kisisel-bilgilerim"
                          ? "nav-active"
                          : ""
                      }
                    >
                      Başla
                    </Nav.Link>
                  </Button>
                </div>
              </div>
              <div className="package-card">
                <div className="details pack-bg-3">
                  <h1 className="mb-6">
                    <br /> Kendini değerlendir{" "}
                  </h1>
                  <Button>
                    <Nav.Link
                      as={Link}
                      to={"/degerlendirmeler"}
                      className={
                        url === "/degerlendirmeler" ? "nav-active" : ""
                      }
                    >
                      Başla
                    </Nav.Link>
                  </Button>
                </div>
              </div>
              <div className="package-card">
                <div className="details pack-bg-1">
                  <h1 className="mb-6">
                    {" "}
                    <br /> Öğrenmeye başla{" "}
                  </h1>
                  <Button className="btn btn-primary w-100 ">Başla</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </main>
  );
}

export default Homepage;
