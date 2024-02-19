import { Row } from "react-bootstrap";
import ProfileRight from "../../../components/Platform/Profile/RightProfile";
import LeftProfile from "../../../components/Platform/Profile/LeftProfile";
import { useEffect, useState } from "react";
import tokenDecode from "../../../hooks/tokenDecode";
import userService from "../../../services/userService";
import { PencilSquare, Share } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import GetByIdResponseUser from "../../../models/response/user/GetByIdResponseUser";


const Profile = () => {
  const [responseData, setResponseData] = useState<GetByIdResponseUser>({
    nationalIdentity: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
    imageId: 0,
    imagePath:"",
    birthDate: "",
    userSocialMedias:[],
    userLanguages: [],
    certificates: [],
    userAnnouncements: [],
    experiences: [],
    userSurveys: [],
    addresses: [],
    educations: []
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.getById(tokenDecode().ID);
        setResponseData(response.data);

      } catch (error) {
        console.error("Veri çekme sırasında bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="d-flex gap-4 justify-content-end mt-6">
        <Link to="/profilimi-duzenle/kisisel-bilgilerim">
          <PencilSquare color="gray" size={24} />
        </Link>
        <Share color="gray" size={24} />
      </div>
      <Row>
        <LeftProfile responseData={responseData}/>
        <ProfileRight />
      </Row>
    </div>
  );
};

export default Profile;
