import { Row } from 'react-bootstrap';
import ProfileRight from '../../components/MyProfile/RightProfile';
import LeftProfile from '../../components/MyProfile/LeftProfile';

const MyProfile = () => {
  return (
    <div className="container">
    <Row>
    <LeftProfile />
    <ProfileRight />
    </Row>
    </div>
  );
};

export default MyProfile;

