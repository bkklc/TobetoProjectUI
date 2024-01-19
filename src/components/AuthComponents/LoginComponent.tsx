import { Button, Col,Form } from 'react-bootstrap'
import { useState } from 'react';
import { AuthLogin } from '../../models/auth';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState<AuthLogin>();
    const navigate = useNavigate();
    
    // const handleUsernameChange = (event:any) => {
    //     setUsername(event.target.value);
    //   };
    
    //   const handlePasswordChange = (event:any) => {
    //     setPassword(event.target.value);
    //   };
    
    const payload = {
        Email: email,        
        Password: password,        
      };


      const handleSubmit =  async (e: any) => {
        e.preventDefault();
    
        try {
            const response = await login(payload);
            const decoded = jwtDecode(response.token);
          console.log(decoded);
          setAuth(response);
        } catch (error) {
          console.error("Login error:", error);
        }
      };
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

                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mt-6'>
                        <Form.Control name='email' type='email' placeholder='E-Posta' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mt-6'>
                        <Form.Control name='password' type='password' placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>                   
                    <Button name='giris' className='w-100 mt-6' variant='primary' type='submit'>Giriş Yap</Button>
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

