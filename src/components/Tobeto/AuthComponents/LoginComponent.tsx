import { Button, Col, Form } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormData } from "../../../models/auth";
import testAuthService from "../../../services/authService";

export default function LoginComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    testAuthService
      .login(formData)
      .then(response => {
        localStorage.setItem("Token" , response.data.token)
        navigate("/platform")
      })
      
  };

  useEffect(() => {
    
  }, [formData]);

  return (
    
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

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-6">
            <Form.Control
              name="email"
              type="email"
              placeholder="E-Posta"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mt-6">
            <Form.Control
              name="password"
              type="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </Form.Group>
          <Button
            name="giris"
            className="w-100 mt-6"
            variant="primary"
            type="submit"
          >
            Giriş Yap
          </Button>
          <label>
            <small>
              
                <Link to={"/şifremi-unuttum"} className="text-decoration-none text-muted mt-5 d-block">
                Şifremi Unuttum
                </Link>
            
            </small>
          </label>
        </Form>
        <Col className="col-12 mt-6">
          <label>
            <small>
              Henüz üye değil misin?

              <Link to={"/kayit-ol"} className="text-decoration-none text-muted fw-bold">
              Kayıt Ol
              </Link>
             
            </small>
          </label>
        </Col>
      </div>
    
  );
}
