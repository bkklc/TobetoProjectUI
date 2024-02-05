import { Row } from 'react-bootstrap';
import ProfileRight from '../../../components/Platform/Profile/RightProfile';
import LeftProfile from '../../../components/Platform/Profile/LeftProfile';
import { useEffect, useState } from 'react';
import tokenDecode from '../../../hooks/tokenDecode';
import userService from '../../../services/userService';

const Profile = () => {
  const [responseData, setResponseData] = useState<any>(null);

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
    <Row>
    <LeftProfile responseData={responseData} />
    <ProfileRight />
    </Row>
    </div>
  );
};

export default Profile;

