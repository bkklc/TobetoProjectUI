import React from "react";

type Props = {};

 const AnnouncementsComponent = (props: Props) => {
  return (
    <div className="row">
      <div className="col-md-4 col-12 my-4">
        <div className="notfy-card notify">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between mb-4">
              <span className="type">Duyuru</span>
              <span className="corp-names type">İstanbul Kodluyor</span>
            </div>
            <span className="header ">
              Ocak Ayı Tercih Formu Bilgilendirmesi
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="date">12.01.2024</span>
            <span className="read-more">Devamını Oku</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsComponent;
