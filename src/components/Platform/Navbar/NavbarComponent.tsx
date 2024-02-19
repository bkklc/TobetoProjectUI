import { Navbar, Nav, Container, NavDropdown, Dropdown, Button, Offcanvas } from 'react-bootstrap';
import PageUrl from '../../../hooks/PageUrl';
import { Link } from 'react-router-dom';
import tokenDecode from '../../../hooks/tokenDecode';
import { useState, useEffect } from 'react';
import GetByIdResponseUser from '../../../models/response/user/GetByIdResponseUser';
import GetByLoginUserData from '../../../hooks/getByIdUserHook';
import { defaultUser } from '../../../models/response/user/GetByIdResponseUser';
import "../../../App.css"

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [responseData, setResponseData] = useState<GetByIdResponseUser>(defaultUser);

  useEffect(() => {
    GetByLoginUserData(setResponseData);
  }, [])



  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/giris';
  };
  const adminControl = () => {
    if (tokenDecode()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === "Admin") {

      return (
        <Dropdown.Item eventKey={1.2} as={Link} to={"/profilimi-duzenle/kisisel-bilgilerim"} onClick={handleClose}>Admin</Dropdown.Item>
      )
    }
  }

  const url = PageUrl();
  return (

    <>

      <Offcanvas show={show} onHide={handleClose} className="d-xxl-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as={Link} to={"/"}>
            <img src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75' width={165} height={34}></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="nav flex-column"
          >

            <Nav.Link as={Link} to={"/"} className={((url === "/" || url === "/platform") ? "nav-active" : "")} onClick={handleClose}>Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to={"/profilim"} className={(url === "/profilim" ? "nav-active" : "")} onClick={handleClose}>Profilim</Nav.Link>
            <Nav.Link as={Link} to={"/degerlendirmeler"} className={(url === "/degerlendirmeler" ? "nav-active" : "")} onClick={handleClose}>Değerlendirmeler</Nav.Link>
            <Nav.Link as={Link} to={"/platform-katalog"} className={(url === "/platform-katalog" ? "nav-active" : "")} onClick={handleClose}>Katalog</Nav.Link>
            <Nav.Link as={Link} to={"/takvim"} className={(url === "/takvim" ? "nav-active" : "")} onClick={handleClose}>Takvim</Nav.Link>
            <Nav.Link as={Link} to={"/istanbul-kodluyor"} className={(url === "/istanbul-kodluyor" ? "nav-active" : "")} onClick={handleClose}>İstanbul Kodluyor</Nav.Link>
          </Nav>
          <div className='my-3 py-3 border-top border-light align-items-center d-flex align-items-center'>
            <div className="btn-group header-avatar w-100">
              <Nav>

                <NavDropdown
                  className='btn p-1 fw-normal text-end d-flex align-items-center b-r-35 w-100 justify-content-between '
                  title={
                    <div className="btn-group align-items-center" style={{ marginRight: "10px", fontSize: "14px", color: "#828282" }}>
                      <img className="thumbnail-image rounded-circle"
                        src={responseData.imagePath}
                        width={32}
                        height={32}
                        style={{ marginRight: "4px" }}
                      />
                      {tokenDecode().Name}
                    </div>
                  }
                  id="basic-nav-dropdown">
                  <Dropdown.Item eventKey={1.1} as={Link} to={"/profilimi-duzenle/kisisel-bilgilerim"} onClick={handleClose}>Profil Bilgileri</Dropdown.Item>
                  {adminControl()}
                  <Dropdown.Item eventKey={1.3} onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i> Logout
                  </Dropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>


      <Navbar expand="sm" className='position-relative navbar navbar-expand-xxl py-5 bg-white'>
        <Container fluid>

          <Navbar.Brand as={Link} to={"/"}>
            <img
              alt=""
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75"
              width="170"
              height="35"
              className="d-inline-block align-top mr-2"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav
              className="mx-auto my-lg-0 d-none d-xxl-flex navbar-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll>

              <Nav.Link as={Link} to={"/"} className={((url === "/" || url === "/platform") ? "nav-active" : "")}>Ana Sayfa</Nav.Link>
              <Nav.Link as={Link} to={"/profilim"} className={(url === "/profilim" ? "nav-active" : "")}>Profilim</Nav.Link>
              <Nav.Link as={Link} to={"/degerlendirmeler"} className={(url === "/degerlendirmeler" ? "nav-active" : "")}>Değerlendirmeler</Nav.Link>
              <Nav.Link as={Link} to={"/platform-katalog"} className={(url === "/platform-katalog" ? "nav-active" : "")}>Katalog</Nav.Link>
              <Nav.Link as={Link} to={"/takvim"} className={(url === "/takvim" ? "nav-active" : "")}>Takvim</Nav.Link>
              <Nav.Link as={Link} to={"/istanbul-kodluyor"} className={(url === "/istanbul-kodluyor" ? "nav-active" : "")}>İstanbul Kodluyor</Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <Button className="btn btn-link p-0 d-xxl-none navbar-burger" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div
            className="mx-3 align-items-center d-flex align-items-center d-none d-xxl-block"
            style={{ gap: "1em" }}
          >
            <span className="tbt-gradient" />
          </div>
          <div className="btn-group header-avatar d-none d-xxl-block">
            <Nav>

              <NavDropdown
                title={
                  <div className="btn-group align-items-center" style={{ marginRight: "10px", fontSize: "14px", color: "#828282" }}>

                    <div className="profile-picture-container" style={{ width: "32px", height: "32px", marginRight: "10px" }}>
                      <img
                        src={responseData.imagePath}
                        alt="Profile"
                        className={`rounded-circle profile-picture `}
                        style={{ marginRight: "10px" }}
                      />
                    </div>




                    {tokenDecode().Name}
                  </div>
                }
                id="basic-nav-dropdown">
                <Dropdown.Item eventKey={1.1} as={Link} to={"/profilimi-duzenle/kisisel-bilgilerim"}>Profil Bilgileri</Dropdown.Item>
                {adminControl()}
                <Dropdown.Item eventKey={1.3} onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i> Logout
                </Dropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;


