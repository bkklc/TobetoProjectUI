import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'
import { Route, Routes } from 'react-router-dom'
import EducationLife from '../../../components/ProfileInfo/EducationLife'
import SocialMedia from '../../../components/ProfileInfo/SocialMedia'
import Abilities from '../../../components/ProfileInfo/Abilities'
import Experiences from '../../../components/ProfileInfo/Experiences'
import MyLanguages from '../../../components/ProfileInfo/MyLanguages'
import Settings from '../../../components/ProfileInfo/Settings'

const ProfileEdit = () => {
  return (
    <Container>
      <Row>
        <SideMenu />
        <Routes>
          <Route path="/kisisel-bilgilerim" Component={PersonalInfo}></Route>
          <Route path='/egitim-hayatim' Component={EducationLife}></Route>
          <Route path='/medya-hesaplarim' Component={SocialMedia}></Route>
          <Route path='/deneyimlerim' Component={Experiences}></Route>
          <Route path="/yetkinliklerim" Component={Abilities}></Route>
          <Route path="/yabanci-dillerim" Component={MyLanguages}></Route>
          <Route path="/ayarlar" Component={Settings}></Route>
        </Routes>
      </Row>
    </Container>
  )
}

export default ProfileEdit
