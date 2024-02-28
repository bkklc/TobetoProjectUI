import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import tokenDecode from "../../../hooks/tokenDecode";
import tokenService from "../../../core/services/tokenService";
import { useState, useEffect } from "react";
import GetByLoginUserData from "../../../hooks/getByIdUserHook";
import GetByIdResponseUser, { defaultUser } from "../../../models/response/user/GetByIdResponseUser";

const TobetoNavbar = () => {
  const [responseData, setResponseData] = useState<GetByIdResponseUser>(defaultUser);

  useEffect(() => {
    if(!tokenService.hasToken()){
      GetByLoginUserData(setResponseData);
    }
    
  }, [])



  const loginControl = () => {
    if (tokenService.hasToken()) {
      return (
        <div className="d-none d-xl-block header-avatar">
          <div className="p-0 fw-normal text-end d-flex align-items-center">
            <div className="me-2">

              <img className="thumbnail-image rounded-circle"
                src={responseData.imagePath}
                width={32}
                height={32}
                style={{ marginRight: "4px" }}
              />
            </div>
            <Link className="btn" to="/platform">
              {tokenDecode().Name}
            </Link>
          </div>
        </div>
      )
    }

    else {
      return (
        <>
          <Link className="btn border-light text-light mx-4" to="/giris">
            Giriş Yap
          </Link>
          <Link className="btn mx-4 btn-rainbow" to="/kayit-ol">
            Ücretsiz Üye Ol
          </Link>
        </>
      )
    }
  }



  return (
    <section className="web-header">
      <Nav className="navbar bg-web navbar-expand-xxl w-100 m-0 z-index-999 position-fixed border-0 px-3 py-5">
        <Container fluid>
          <Link to="/">
            <img
              alt=""
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75"
              decoding="async"
              data-nimg="intrinsic"
              width={165}
              height={34}
            />
          </Link>
          <ul className="d-none d-xl-flex flex-row justify-content-center navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/hakkimizda">
                Biz Kimiz?
              </Link>
            </li>
            <li className="nav-item dropdown tbt-dropdown">
              <Link
                className="nav-link tnav-link "
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Neler Sunuyoruz?
              </Link>
              <ul className="dropdown-menu dd-bg w-100">
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/bireyler-icin">
                    Bireyler için
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/kurumlar-icin">
                    Kurumlar için
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/katalog">
                Katalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/codecademy">
                Codecademy
              </Link>
            </li>
            <li className="nav-item dropdown tbt-dropdown">
              <Link
                className="nav-link tnav-link "
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tobeto'da Bu Ay
              </Link>
              <ul className="dropdown-menu dd-bg w-100">
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/basinda-biz">
                    Basında Biz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/takvim-anasayfa">
                    Takvim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="m-0 nav-link " to="/istanbul-kodluyor">
                    İstanbul Kodluyor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-none d-xl-block">
            {loginControl()}
          </div>
        </Container>
      </Nav>
    </section>

  );
};

export default TobetoNavbar;
