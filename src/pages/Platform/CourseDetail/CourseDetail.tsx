import React from 'react'
import CourseInfo from '../../../components/Platform/CourseDetail/CourseInfo'
import { Container } from 'react-bootstrap'
import CourseBar from '../../../components/Platform/CourseDetail/CourseBar'

const CourseDetail = () => {
  return (
    <>
    <Container>
    <CourseBar/>
    <CourseInfo/>    
    </Container>
    </>
  )
}

export default CourseDetail