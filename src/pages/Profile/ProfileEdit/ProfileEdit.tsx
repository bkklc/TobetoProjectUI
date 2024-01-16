import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthBanner from '../../../components/AuthComponents/AuthBanner'

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