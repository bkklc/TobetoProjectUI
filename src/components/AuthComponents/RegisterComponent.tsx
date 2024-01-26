import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const navigate = useNavigate();

  const payload = {
    FirstName: firstName,
    LastName: lastName,
    Password: password,
    Email: email,
  };

  const isPasswordMatch = () => {
    return password === passwordAgain;
  };

  const handleRegistration = async (e: any) => {
    if (isPasswordMatch()) {
      e.preventDefault();

      try {
        await register(payload);

        navigate("/giris");
      } catch (error) {
        return error;
      }
    } else {
      alert("Şifreler Eşleşmedi");      
      
    }
  };

  

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
          <Form data-hs-cf-bound="true" onSubmit={handleRegistration}>
            <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>
            <Form.Group>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                className="form-control mt-6"
                type="text"
                placeholder="Ad*"
                required
              />
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                className="form-control mt-6"
                type="text"
                placeholder="Soyad*"
                required
              />
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="form-control mt-6"
                type="email"
                placeholder="E-Posta*"
                required                
              />
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control mt-6"
                type="password"
                placeholder="Şifre*"
                required
              />
              <Form.Control
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                name="Şifre Tekrarı"
                className="form-control mt-6"
                type="password"
                placeholder="Şifre Tekrar*"
              />
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
