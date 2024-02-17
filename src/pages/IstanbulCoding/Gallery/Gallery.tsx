import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_41b41689ce.JPG",
      thumbnail: "https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_41b41689ce.JPG",
    },
    {
      original: "https://tobeto.s3.cloud.ngn.com.tr/DSCF_3893_8edb49df7e.JPG",
      thumbnail: "https://tobeto.s3.cloud.ngn.com.tr/DSCF_3893_8edb49df7e.JPG",
    },
    {
      original:
        "https://tobeto.s3.cloud.ngn.com.tr/New_Project_2_daa103de14.jpg",
      thumbnail:
        "https://tobeto.s3.cloud.ngn.com.tr/New_Project_2_daa103de14.jpg",
    },
  ];

  return (
    <div className="d-flex flex-column justfiy-content-between overflow-hidden">
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
      <div style={{ maxWidth: "750px", minHeight: "calc(100vh - 338px)" }}>
        <ImageGallery
          items={images}
          showBullets={false}
          showIndex={false}
          showThumbnails={true}
          lazyLoad={false}
          showPlayButton={false}
          showNav={true}
          showFullscreenButton={false}
          thumbnailPosition={"left"}
        />
      </div>
      <div className="row bg-darkblue ">
        <div className="col-12 my-10 col-lg-auto d-flex justify-content-center gap-4">
          <Facebook color="white" size={24} />
          <Instagram color="white" size={24} />
          <Twitter color="white" size={24} />
          <Linkedin color="white" size={24} />
          <Envelope color="white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
