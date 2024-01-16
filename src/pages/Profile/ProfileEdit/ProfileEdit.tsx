import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideMenu from '../../../components/ProfileInfo/SideMenu'
import PersonalInfo from '../../../components/ProfileInfo/PersonalInfo'

const ProfileEdit = () => {
  return (
    <Container>
        <Row>
            <SideMenu/>
            <PersonalInfo/>
        </Row>
    </Container>
  )
}

export default ProfileEdit