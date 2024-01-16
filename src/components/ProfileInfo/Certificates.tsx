import React from 'react';

const Certificates: React.FC = () => {
  return (
    <div className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
      <div className="row">
        <div className="section-header">
          <span className="header-text">
            <strong>Sertifikalarım</strong>
          </span>
        </div>
        <div className="col-12 tobeto-light-bg">
          <div className="upload-area">
            <div className="cursor-pointer">
              {/* SVG içeriği */}
            </div>
            <span><strong>Dosya Yükle</strong></span>
            <div>
              <div className="uppy-Container">
                {/* Diğer içerikler buraya gelecek */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
