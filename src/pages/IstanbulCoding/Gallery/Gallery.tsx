import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

const Gallery = () => {
  return (
    <>
      <div className="row bg-darkblue">
        <div className="col-12 d-flex justify-content-center pt-10 pb-6">
          <img
            src="../../src/assets/png/istanbul-kodluyor-banner.png"
            alt="İstanbul Kodluyor Logo"
            decoding="async"
            data-nimg="intrinsic"
            style={{ width: "450px", height: "170px" }}
          />
        </div>
      </div>

      <div className="row bg-darkblue">
        <div className="col-12 my-10 col-lg-auto d-flex justify-content-center gap-4">
          <Facebook color="white" size={24} />
          <Instagram color="white" size={24} />
          <Twitter color="white" size={24} />
          <Linkedin color="white" size={24} />
          <Envelope color="white" size={24} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
