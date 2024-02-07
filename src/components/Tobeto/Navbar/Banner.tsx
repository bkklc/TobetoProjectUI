const Banner = () => {
  return (
    <div className="ik-banner">
      <div className="container">
        <div className="ik-banner-top">
          <div className="">
            <span className="ik-logo" />
          </div>
          <div className="mobile-none">
            <span className="text-ik fw-bold">
              Aradığın{" "}
              <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
              <span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span> Burada!
            </span>
          </div>
          <div className="">
            <button className="ik-btn">Başvur</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
