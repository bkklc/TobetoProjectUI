import { Row } from 'react-bootstrap';
import ProfileRight from '../../components/Profile/RightProfile';
import LeftProfile from '../../components/Profile/LeftProfile';

const Profile = () => {
  return (
    <div className="container">
    <Row>
    <LeftProfile />
    <ProfileRight />
    </Row>
    </div>
  );
};

export default Profile;

