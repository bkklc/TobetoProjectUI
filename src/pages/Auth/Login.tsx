import React from 'react'
import LoginComponent from '../../components/AuthComponents/LoginComponent'
import { Container, Row, Col } from 'react-bootstrap'
import AuthBanner from '../../components/AuthComponents/AuthBanner'


const Login = () => {
    return (
        <>
            <Container>
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