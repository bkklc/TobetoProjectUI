import { Container, Row , Col} from "react-bootstrap";
import RegisterComponent from "../../components/AuthComponents/RegisterComponent";
import AuthBanner from "../../components/AuthComponents/AuthBanner";

export default function Register() {
  return (
    <>
            <Container>
                <Row className='mt-10 equal-col'>
                    <Col md={6} className="col-md-6 col-12 btn-rainbow-card">
                        <RegisterComponent/>
                    </Col>
                    <Col md={6} className="col-12 btn-rainbow-card-ik ">
                        <AuthBanner />
                    </Col>
                </Row>
            </Container>
        </>
  )
}
