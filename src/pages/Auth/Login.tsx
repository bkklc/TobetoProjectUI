import React from 'react'
import LoginComponent from '../../components/AuthComponents/LoginComponent'
import { Container, Row } from 'react-bootstrap'
import AuthBanner from '../../components/AuthComponents/AuthBanner'


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