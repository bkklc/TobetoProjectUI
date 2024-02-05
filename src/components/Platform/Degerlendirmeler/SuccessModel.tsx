import { Card, Col, Container, Row } from "react-bootstrap";

const SuccessModel = () => {
  const containerStyle = {
    marginTop: '8rem',
  };

  const cardStyle = {
    marginBottom: '8px',
  };

  const chartSlimStyle = {
    gap: '14px',
  };

  const circularChartStyle = {
    viewBox: '0 0 36 36',
    className: 'circular-chart orange',
  };

  return (
    <section className="mt-8" style={containerStyle}>
      <Container>
        <Row>
          <Col md={12}>
            <Card className="dashboard-card" style={cardStyle}>
              <span>Tobeto İşte Başarı Modeli</span>
              <p>
                80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri <b>tamamla,</b> rozetini <b>kazan.</b>
              </p>
              <a className="btn btn-primary" href="#">
                Raporu Görüntüle
              </a>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="dashboard-card1 equal-box">
              <span>Yazılımda Başarı Testi</span>
              <p>
                Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
              </p>
              <label className="text-white">&gt;&gt;&gt;</label>
            </Card>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column equal-box" style={chartSlimStyle}>
              <Card className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="single-chart">
                    <svg {...circularChartStyle}>
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                      <path className="circle" strokeDasharray="80,100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                      <text x="18" y="20.35" className="percentage">80</text>
                    </svg>
                  </div>
                  <span>Front End</span>
                </div>
                <button className="btn btn-light">Raporu Görüntüle</button>
              </Card>
              <Card className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Full Stack</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </Card>

              <Card className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Back End</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </Card>

              <Card className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Microsoft SQL Server</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </Card>

              <Card className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Masaüstü Programlama</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuccessModel;
