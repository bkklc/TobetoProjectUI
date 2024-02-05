import { useEffect, useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import testAuthService from "../../../services/authService";
import { RegisterFormData } from "../../../models/auth";

export default function RegisterComponent() {

  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    testAuthService
      .register(formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  useEffect(() => {

  }, [formData]);

  return (

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
          <Form.Group>
            <Form.Control
              value={formData.firstName}
              onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              name="firstName"
              className="form-control mt-6"
              type="text"
              placeholder="Ad*"
              required
            />
            <Form.Control
              value={formData.lastName}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              name="lastName"
              className="form-control mt-6"
              type="text"
              placeholder="Soyad*"
              required
            />
            <Form.Control
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              name="email"
              className="form-control mt-6"
              type="email"
              placeholder="E-Posta*"
              required
            />
            <Form.Control
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              name="password"
              className="form-control mt-6"
              type="password"
              placeholder="Şifre*"
              required
            />
            {/*<Form.Control
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                name="Şifre Tekrarı"
                className="form-control mt-6"
                type="password"
                placeholder="Şifre Tekrar*"
  />*/}
          </Form.Group>
          <Button
            name="kayit-ol"
            className="w-100 mt-6"
            variant="primary"
            type="submit"
          >
            Kayıt Ol
          </Button>
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

  );
}
