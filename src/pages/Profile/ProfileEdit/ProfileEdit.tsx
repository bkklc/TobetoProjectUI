import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'
import { Route, Routes } from 'react-router-dom'
import AuthBanner from '../../../components/AuthComponents/AuthBanner'
import EducationLife from '../../../components/ProfileInfo/EducationLife'
import SocialMedia from '../../../components/ProfileInfo/SocialMedia'
import Abilities from '../../../components/ProfileInfo/Abilities'
import Experiences from '../../../components/ProfileInfo/Experiences'

const ProfileEdit = () => {
  return (
    <Container>
      <Row>
        <SideMenu />
        <Routes>
        <Route path="/kisisel-bilgilerim" Component={PersonalInfo}></Route>
        <Route path='egitim-hayatim' Component={EducationLife}></Route>
        <Route path='sosyal-medya' Component={SocialMedia}></Route>
        <Route path='deneyimlerim' Component={Experiences}></Route>
        <Route path="/a" Component={AuthBanner}></Route>
        <Route path="yetkinliklerim" Component={Abilities}></Route>
        </Routes>
      </Row>
    </Container>
  )
}

export default ProfileEdit
