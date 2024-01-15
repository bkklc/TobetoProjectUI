import { Container, Row } from "react-bootstrap";
import RegisterComponent from "../../components/AuthComponents/RegisterComponent";
import AuthBanner from "../../components/AuthComponents/AuthBanner";

export default function Register() {
  return (
    <Container>
        <Row>
            <RegisterComponent/>
            <AuthBanner/>
        </Row>
    </Container>
  )
}
