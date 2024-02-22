import { Row } from "react-bootstrap";
import ProfileRight from "../../../components/Platform/Profile/RightProfile";
import LeftProfile from "../../../components/Platform/Profile/LeftProfile";
import { useEffect, useState } from "react";
import { PencilSquare, Share } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import GetByIdResponseUser, { defaultUser } from "../../../models/response/user/GetByIdResponseUser";
import GetByLoginUserData from "../../../hooks/getByIdUserHook";


const Profile = () => {
  const [responseData, setResponseData] = useState<GetByIdResponseUser>(defaultUser);

  
  useEffect(() => {
    GetByLoginUserData(setResponseData);
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
