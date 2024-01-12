
const TestsAndInterviews = () => {
  const sectionStyle = {
    marginTop: '2rem',
    marginBottom: '20rem', // `mb-20` olarak anladım, ihtiyaca göre değiştirebilirsiniz
  };


  const dashboardCard4Style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const spanStyle = {
    marginBottom: '4px',
    fontWeight: 'bold',
  };

  return (
    <section className="mt-2 mb-20" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-8">
            <div className="dashboard-card4 equal-box" 
             // @ts-ignore
            style={dashboardCard4Style}>
              <span style={spanStyle}>Kazanım Odaklı Testler</span>
              <p>Dijital gelişim kategorisindeki eğitimlere başlamadan önce konuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin.</p>
              <p></p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-8">
            <div className="dashboard-card4 equal-box" 
             // @ts-ignore
            style={dashboardCard4Style}>
              <span style={spanStyle}>Huawei Talent Interview <br /> Teknik Bilgi Sınavı*</span>
              <p className="mt-4">
                <b>
                  <i>Sertifika alabilmen için,</i>
                </b>{' '}
                eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.
                <br />
                <br />
                4400+  soru | 30+ programlama dili <br />
                4 zorluk seviyesi
              </p>
              <small className="text-white">*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestsAndInterviews;
