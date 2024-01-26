import { Col, Row, Card } from 'react-bootstrap';

function Certificates () { 
  return (
    <Col xs={12} lg={9} style={{ minHeight: "90vh" }}>
      <Row>
        <Card className="section-header">
          <Card.Body>
            <span className="header-text">
              <strong>Sertifikalarım</strong>
            </span>
          </Card.Body>
        </Card>
        <Col xs={12} className="tobeto-light-bg">
          <Card className="upload-area">
            <Card.Body>
              <div className="cursor-pointer">
                {/* SVG içeriği */}
              </div>
              <span><strong>Dosya Yükle</strong></span>
              <div>
                <div className="uppy-Container">
                  {/* Diğer içerikler buraya gelecek */}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Certificates;
