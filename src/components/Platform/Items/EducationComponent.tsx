

const EducationComponent = () => {
  return (
    <div className="col-md-3 col-12 mb-4">
      <div className="corp-edu-card">
        <div
          className="card-img"
          style={{
            backgroundImage:
              'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
          }}
        />

        <div className="card-content">
          <div className="d-flex flex-column">
            <span>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</span>
            <span className="platform-course-date">21 Eylül 2023 15:20</span>
          </div>
          <a className="apply-btn">Eğitime Git</a>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
