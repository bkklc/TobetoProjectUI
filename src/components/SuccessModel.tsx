
const SuccessModel = () => {
  const containerStyle = {
    marginTop: '8rem',
  };

  const cardStyle = {
    marginBottom: '8px',
  };

  const chartSlimStyle = {
    gap: '14px',
  };

  const circularChartStyle = {
    viewBox: '0 0 36 36',
    className: 'circular-chart orange',
  };

  return (
    <section className="mt-8" style={containerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mb-8">
            <div className="dashboard-card" style={cardStyle}>
              <span>Tobeto İşte Başarı Modeli</span>
              <p>
                80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri <b>tamamla,</b> rozetini <b>kazan.</b>
              </p>
              <a className="btn btn-primary" href="#">
                Raporu Görüntüle
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-8 d-none">
            <div className="dashboard-card2">
              <span>Kişisel Gelişim Envanteri</span>
              <p>
                Kendin için en uygun kariyer alanlarını <b>keşfet</b>.
              </p>
              <span>YAKINDA</span>
              <label className="switch soon-shape mx-auto">
                <span className="slider round"></span>
              </label>
            </div>
            <div className="w-100 d-flex justify-content-center"></div>
          </div>
          <div className="col-12 col-md-6 mb-8">
            <div className="dashboard-card1 equal-box">
              <span>Yazılımda Başarı Testi</span>
              <p>
                Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
              </p>
              <label className="text-white">&gt;&gt;&gt;</label>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-8">
            <div className="d-flex flex-column equal-box" style={chartSlimStyle}>
              <div className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="single-chart">
                    <svg {...circularChartStyle}>
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                      <path className="circle" strokeDasharray="80,100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                      <text x="18" y="20.35" className="percentage">80</text>
                    </svg>
                  </div>
                  <span>Front End</span>
                </div>
                <button className="btn btn-light">Raporu Görüntüle</button>
              </div>
              <div className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Full Stack</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </div>
              <div className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Back End</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </div>
              <div className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Microsoft SQL Server</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </div>
              <div className="dashboard-card-slim">
                <div className="d-flex align-items-center" style={chartSlimStyle}>
                  <div className="platformIcon"></div>
                  <span>Masaüstü Programlama</span>
                </div>
                <button className="btn btn-light">Başla</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessModel;
