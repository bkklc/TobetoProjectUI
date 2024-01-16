import React from 'react';
import { Container } from 'react-bootstrap';


export default function Abilities() {
  return (
    <Container>
         <div className="container-lg" style={{ minHeight: "90vh" }}>
    <div className="row mb-2">
      <div className="col-12 mb-6">
        <label className="form-label">Yetkinlik</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <svg
              height={20}
              width={20}
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              className="css-8mmkcg"
            >
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Seçiniz"
            aria-label="Seçiniz"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
    <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
      Kaydet
    </button>
    <div className="col-12">
      <div className="my-grade">
        <div className="grade-details d-flex justify-content-between align-items-center">
          <div className="grade-details-col">
            <span className="grade-details-content">Javascript</span>
          </div>
          <span className="grade-delete g-del"></span>
        </div>
      </div>
      <div className="my-grade">
        <div className="grade-details d-flex justify-content-between align-items-center">
          <div className="grade-details-col">
            <span className="grade-details-content">HTML</span>
          </div>
          <span className="grade-delete g-del"></span>
        </div>
      </div>
      <div className="my-grade">
        <div className="grade-details d-flex justify-content-between align-items-center">
          <div className="grade-details-col">
            <span className="grade-details-content">CSS</span>
          </div>
          <span className="grade-delete g-del"></span>
        </div>
      </div>
    </div>
  </div>
  </Container>
);
}

   
