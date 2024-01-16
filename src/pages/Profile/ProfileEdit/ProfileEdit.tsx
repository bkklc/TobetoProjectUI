import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'
import { Route, Routes } from 'react-router-dom'
import AuthBanner from '../../../components/AuthComponents/AuthBanner'
import EducationLife from '../../../components/ProfileInfo/EducationLife'
import SocialMedia from '../../../components/ProfileInfo/SocialMedia'
import Abilities from '../../../components/ProfileInfo/Abilities'
import Experiences from '../../../components/ProfileInfo/Experiences'
import MyLanguages from '../../../components/ProfileInfo/MyLanguages'

const ProfileEdit = () => {
  return (
    <Container>
      <Row>
        <SideMenu />
        <Routes>
        <Route path="/kisisel-bilgilerim" Component={PersonalInfo}></Route>
        <Route path="/a" Component={AuthBanner}></Route>
        </Routes>
      </Row>
    </Container>
  )
}

export default ProfileEdit
