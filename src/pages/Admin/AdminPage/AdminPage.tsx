import { Container, Row } from "react-bootstrap";
import AdminSideMenu from "../../../components/Admin/adminSideMenu/AdminSideMenu";
import { Route, Routes } from "react-router-dom";
import Education from "../../../components/Admin/AdminPages/Education";
import Announcement from "../../../components/Admin/AdminPages/Announcement";
import Classes from "../../../components/Admin/AdminPages/Classes";

export default function AdminPage() {
  return (
    <Container>
      <Row className='mt-8'>
        <AdminSideMenu />
        <Routes>
          <Route path="/egitimler" Component={Education}></Route>
          <Route path="/duyurular" Component={Announcement}></Route>
          <Route path="/siniflar" Component={Classes}></Route>
        </Routes>
      </Row>
    </Container>
  )
}
