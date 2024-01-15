import React from 'react'
import LoginComponent from '../../components/Login/LoginComponent'
import { Container, Row } from 'react-bootstrap'
import AuthBanner from '../../components/Login/AuthBanner'

const Login = () => {
    return (
        <>
            <Container>
                <Row >
                    <LoginComponent />
                    <AuthBanner />
                </Row>
            </Container>
        </>
    )
}

export default Login