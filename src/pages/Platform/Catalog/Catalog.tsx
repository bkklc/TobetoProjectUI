import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Catolog.css";
import Accordion from "../../../components/Platform/Accordion/Accordion";
import CatalogCard from "../../../components/Platform/CatalogCard/CatalogCard";
import CatalogFilter from "../../../components/Platform/CatalogFilter/CatalogFilter";

function Catalog() {
  return (
    <div>
      <div className="search-section container-fluid">
        <Container>
          <Row>
            <Col md={9} xs={12} className="search-container">
              <div className="education-count">
                <span>Öğrenmeye başla!</span>
              </div>
              <div className="search-box">
                <InputGroup className="w-100 d-flex align-items-center">
                  <Button variant="light">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "end",
                      }}
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M28.8758 28.8748L22.8945 22.8936"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M28.8758 28.8748L22.8945 22.8936"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Button>
                  <div className="inputWrapper">
                    <FormControl
                      type="text"
                      id="search"
                      placeholder="Eğitim arayın..."
                      className="w-100"
                    />
                  </div>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container mt-5 pb-20">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 light">
            <div className="col-lg-3 col-md-4 col-12 w-100">
              <div className="filter dm-none">
                <h2>Filtrele</h2>
                <hr className="mt-0" />
                <div>
                  <Accordion
                    title="Kategori"
                    content={<CatalogFilter />}
                    activeStyle={{ background: "#93f" }}
                    passiveStyle={{ background: "#4d405ab0" }}
                    iconColor="#fff"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="row gy-6 gx-3">
              <div className="col-lg-4 col-md-6 col-12  cursor-pointer">
                <CatalogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalog;
