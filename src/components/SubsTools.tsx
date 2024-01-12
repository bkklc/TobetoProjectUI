

const SubsTools = () => {
  const sectionStyle = {
    paddingTop: '5rem',
  };

  const gradientLineStyle = {
    position: 'absolute',
    top: '5rem',
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, rgba(0, 123, 255, 0) 0%, rgba(0, 123, 255, 0.5) 50%, rgba(0, 123, 255, 0) 100%)',
  };

  const containerStyle = {
    textAlign: 'center',
  };

  const textSecondaryStyle = {
    fontWeight: 'normal',
  };

  const textInfoStyle = {
    fontWeight: 'normal',
  };

  return (
    <section className="py-5" style={sectionStyle}>
      <div className="position-relative">
        <div className="gradient-line3"
        // @ts-ignore
         style={gradientLineStyle}></div>
        <div className="container text-center" 
        // @ts-ignore
        style={containerStyle}>
          <div className="mw-5xl mx-auto">
            <h3>
              <span className="text-secondary" style={textSecondaryStyle}>
                Aboneliğe özel
              </span>
              <span className="fw-normal text-info" style={textInfoStyle}>
                değerlendirme araçları için
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsTools;
