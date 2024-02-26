import { Container, Row } from "react-bootstrap";
import AdminSideMenu from "../../../components/Admin/adminSideMenu/AdminSideMenu";

export default function AdminPage() {
  return (
    <Container>
      <Row className='mt-8'>
        <AdminSideMenu />
        
      </Row>
    </Container>
  )
}
