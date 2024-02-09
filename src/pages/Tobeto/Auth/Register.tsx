import { Container, Row , Col} from "react-bootstrap";
import RegisterComponent from "../../../components/Tobeto/AuthComponents/RegisterComponent";
import AuthBanner from "../../../components/Tobeto/AuthComponents/AuthBanner";


export default function Register() {
  return (
    <>
            <Container className='mt-40 mb-10'>
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
