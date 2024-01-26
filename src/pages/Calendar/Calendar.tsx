import CalendarLeftMenu from '../../components/Calendar/CalendarLeftMenu'
import CalendarComponent from '../../components/Calendar/CalendarComponent'
import { Row } from 'react-bootstrap'

export default function Calendar() {
  return (
    <>
    <Row>
    <CalendarLeftMenu/>
    <CalendarComponent/>

    </Row>
    
   
    </>
    
  )
}
