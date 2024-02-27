import { Container, Row } from "react-bootstrap";
import AdminSideMenu from "../../../components/Admin/adminSideMenu/AdminSideMenu";
import { Route, Routes } from "react-router-dom";
import Education from "../../../components/Admin/AdminPages/Education";

export default function AdminPage() {
  return (
    <Container>
      <Row className='mt-8'>
        <AdminSideMenu />
        <Routes>
          <Route path="/egitimler" Component={Education}></Route>
        </Routes>
      </Row>
    </Container>
  )
}
