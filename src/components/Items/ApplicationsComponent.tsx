import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import AnnouncementsComponent from "./AnnouncementsComponent";

type Props = {};

const ApplicationsComponent = (props: Props) => {
  return (
    <Row>
      <Col md={6}>
        <Card className="status-card status_accepted">
          <span className="form_name">İstanbul Kodluyor</span>
          <span className="form_status"></span>
          <span className="pull_back"></span>
          <span className="form_name">Bilgilendirme</span>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fa fa-check fa-sm"
                aria-hidden="true"
                style={{ color: "green", marginRight: "5px" }}
                data-darkreader-inline-color=""
              ></i>
              <span className="form_date">
                {" "}
                İstanbul Kodluyor Başvuru Formu onaylandı.
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fa fa-check fa-sm"
                aria-hidden="true"
                style={{ color: "green", marginRight: "5px" }}
                data-darkreader-inline-color=""
              ></i>
              <span className="form_date">
                {" "}
                İstanbul Kodluyor Belge Yükleme Formu onaylandı.
              </span>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ApplicationsComponent;

