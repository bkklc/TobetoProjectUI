import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../../components/Platform/ProfileInfo/SideMenu'
import PersonalInfo from '../../../../components/Platform/ProfileInfo/PersonalInfo'
import { Route, Routes } from 'react-router-dom'
import EducationLife from '../../../../components/Platform/ProfileInfo/EducationLife'
import SocialMedia from '../../../../components/Platform/ProfileInfo/SocialMedia'
import Abilities from '../../../../components/Platform/ProfileInfo/Abilities'
import Experiences from '../../../../components/Platform/ProfileInfo/Experiences'
import MyLanguages from '../../../../components/Platform/ProfileInfo/MyLanguages'
import Settings from '../../../../components/Platform/ProfileInfo/Settings'
import Certificates from '../../../../components/Platform/ProfileInfo/Certificates'


const ProfileEdit = () => {
  return (
    <Container>
      <Row className='mt-8'>
        <SideMenu />
        <Routes>
          <Route path="/kisisel-bilgilerim" Component={PersonalInfo}></Route>
          <Route path='/egitim-hayatim' Component={EducationLife}></Route>
          <Route path='/medya-hesaplarim' Component={SocialMedia}></Route>
          <Route path='/deneyimlerim' Component={Experiences}></Route>
          <Route path="/yetkinliklerim" Component={Abilities}></Route>
          <Route path="/yabanci-dillerim" Component={MyLanguages}></Route>
          <Route path="/ayarlar" Component={Settings}></Route>
          <Route path='/sertifikalarim' Component={Certificates}></Route>
        </Routes>
      </Row>
    </Container>
  )
}

export default ProfileEdit
