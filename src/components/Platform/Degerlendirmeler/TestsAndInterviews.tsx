import { Card, Col, Container, Row } from "react-bootstrap";

const TestsAndInterviews = () => {
  return (
    <section className="mt-2 mb-20" >
      <Container>
        <Row>
          <Col md={6}>
            <Card className="dashboard-card4 equal-box">
              <span>Kazanım Odaklı Testler</span>
              <p>Dijital gelişim kategorisindeki eğitimlere başlamadan önce konuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin.</p>
              <p></p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="dashboard-card4 equal-box">
              <span>Huawei Talent Interview <br /> Teknik Bilgi Sınavı*</span>
              <p className="mt-4">
                <b>
                  <i>Sertifika alabilmen için,</i>
                </b>{' '}
                eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.
                <br />
                <br />
                4400+  soru | 30+ programlama dili <br />
                4 zorluk seviyesi
              </p>
              <small className="text-white">*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</small>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default TestsAndInterviews;
