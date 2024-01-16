import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const ProfileEdit = () => {
  return (
    <Container>
      <Row>
        <SideMenu />
        <Routes>
          <Route path="/kisiselBilgilerim" Component={PersonalInfo}></Route>
        </Routes>
      </Row>
    </Container>
  )
}

export default ProfileEdit