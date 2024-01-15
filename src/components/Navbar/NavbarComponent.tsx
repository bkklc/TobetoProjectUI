import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar expand="sm" className='position-relative navbar navbar-expand-xxl py-5 bg-white'>
      <Container fluid>
        <Navbar.Brand href="#home">
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
            <Nav.Link as={Link} to={"/"} className='nav-active'>Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to={"/profilim"}>Profilim</Nav.Link>
            <Nav.Link as={Link} to={"/degerlendirmeler"}>Değerlendirmeler</Nav.Link>
            <Nav.Link>Katalog</Nav.Link>
            <Nav.Link>Takvim</Nav.Link>
            <Nav.Link>İstanbul Kodluyor</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <NavDropdown
            title={
              <div className="btn-group header-avatar">
                <img className="thumbnail-image"
                  src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75'
                  width={32}
                  height={32}
                />
                Furkan Kayali
              </div>
            }
            id="basic-nav-dropdown">
            <Dropdown.Item eventKey={1.1} href="/profilBilgileri">Profil Bilgileri</Dropdown.Item>
            <Dropdown.Item eventKey={1.3}>
              <i className="fa fa-sign-out"></i> Logout
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent