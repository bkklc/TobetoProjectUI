import { Container, Row, Col } from 'react-bootstrap'
import LoginComponent from '../../../components/Tobeto/AuthComponents/LoginComponent'
import AuthBanner from '../../../components/Tobeto/AuthComponents/AuthBanner'



const Login = () => {
    return (
        <>
            <Container className='mt-60 mb-10'>
                <Row className='mt-10 equal-col'>
                    <Col md={6} className="btn-rainbow-card mx-auto text-center col-12">
                        <LoginComponent />
                    </Col>
                    <Col md={6} className="col-12 btn-rainbow-card-ik ">
                        <AuthBanner />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login