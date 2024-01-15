import React from 'react'
import LoginComponent from '../../components/Auth/LoginComponent'
import { Container, Row } from 'react-bootstrap'
import AuthBanner from '../../components/Auth/AuthBanner'


const Login = () => {
    return (
        <>
            <Container>
                <Row >
                    <LoginComponent></LoginComponent>
                    <AuthBanner></AuthBanner>
                </Row>
            </Container>
        </>
    )
}

export default Login