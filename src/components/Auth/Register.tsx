import React from "react";
import { Button, Col, Form } from "react-bootstrap";

export default function Register() {
  return (
    <Col className="col-md-6 col-12 btn-rainbow-card">
      <div className=" mx-auto text-center">
        <div className="py-4 px-md-12 px-0 text-center">
          <div className="cursor-pointer">
            <img
              alt=""
              aria-hidden="true"
              src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              width={200}
              height={120}
            />
          </div>
          <Form data-hs-cf-bound="true">
            <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>

            <Form.Group>
              <Form.Control
                name="firstName"
                className="form-control mt-6"
                type="text"
                placeholder="Ad*"
              />
              <Form.Control
                name="lastName"
                className="form-control mt-6"
                type="text"
                placeholder="Soyad*"
              />
              <Form.Control
                name="email"
                className="form-control mt-6"
                type="text"
                placeholder="E-Posta*"
              />
              <Form.Control
                name="password"
                className="form-control mt-6"
                type="text"
                placeholder="Şifre*"
              />
              <Form.Control
                name="passwordAgain"
                className="form-control mt-6"
                type="text"
                placeholder="Şifre Tekrar*"
              />
            </Form.Group>
          </Form>
          <Button className="btn btn-primary w-100 mt-6">Kayıt Ol</Button>
          <div className="col-12 mt-6">
            <label>
              <small>
                Zaten bir hesabın var mı?
                <a
                  className="text-decoration-none text-muted fw-bold"
                  href="/giris"
                >
                  {" "}
                  Giriş Yap
                </a>
              </small>
            </label>
          </div>
        </div>
      </div>
    </Col>
  );
}
