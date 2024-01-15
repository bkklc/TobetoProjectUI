import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function LoginComponent() {
    return (
        <Col className="btn-rainbow-card mx-auto text-center col-md-6 col-12">
            <div className="py-4 px-sm-0 px-md-12 text-center ">
                <div className="d-flex flex-column align-items-center">
                    <span>
                        <span>
                            <img
                                alt=""
                                aria-hidden="true"
                                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                                width={200}
                                height={120}
                            />
                        </span>

                    </span>
                </div>

                <Form>
                    <Form.Group className='mt-6'>
                        <Form.Control name='email' type='email' placeholder='E-Posta' />
                    </Form.Group>
                    <Form.Group className='mt-6'>
                        <Form.Control name='password' type='password' placeholder='Şifre' />
                    </Form.Group>
                    <Button name='giris' className='w-100 mt-6' variant='primary' >Giriş Yap</Button>
                    <label>
                        <small>
                            <p className="text-decoration-none text-muted mt-5 d-block">Şifremi Unuttum</p>
                        </small>
                    </label>
                </Form>
                <Col className="col-12 mt-6">
                    <label>
                        <small>
                            Henüz üye değil misin?
                            <a className="text-decoration-none text-muted fw-bold" href="/kayit-ol">Kayıt Ol</a>
                        </small>
                    </label>
                </Col>
            </div>
        </Col>


    )
}

