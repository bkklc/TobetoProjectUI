import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import { register } from "../../services/authService";


export default function RegisterComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleFirstName = (event: any) => {
    setFirstName(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleLastName = (event: any) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();    

    try {
      await register(firstName, lastName, password, email);      
      handleClear();
    } catch (error) {
      return error;
    }
  };
  

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

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
          <Form data-hs-cf-bound="true" onSubmit={handleSubmit}>
            <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>
            <Form.Group >
              <Form.Control
                value={firstName}
                onChange={handleFirstName}
                name="firstName"
                className="form-control mt-6"
                type="text"
                placeholder="Ad*"
              />
              <Form.Control
                value={lastName}
                onChange={handleLastName}
                name="lastName"
                className="form-control mt-6"
                type="text"
                placeholder="Soyad*"
              />
              <Form.Control
                value={email}
                onChange={handleEmail}
                name="email"
                className="form-control mt-6"
                type="email"
                placeholder="E-Posta*"
              />
              <Form.Control
                value={password}
                onChange={handlePassword}
                name="password"
                className="form-control mt-6"
                type="password"
                placeholder="Şifre*"
              />
              <Form.Control
                name="passwordAgain"
                className="form-control mt-6"
                type="password"
                placeholder="Şifre Tekrar*"
              />
              
            </Form.Group>
          <Button name='kayit-ol' className='w-100 mt-6' variant='primary' type='submit'>Kayıt Ol</Button>

          </Form>

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
