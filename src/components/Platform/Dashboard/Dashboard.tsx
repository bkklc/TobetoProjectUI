import { Route, Routes } from "react-router-dom";
import ProfileEdit from "../../../pages/Platform/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../../pages/Platform/Profile/Profile";
import Calendar from "../../../pages/Platform/Calendar/Calendar";
import DashboardRoute from "../DashboardRoute/dashboardRoute";
import Homepage from "../../../pages/Platform/Homepage/Homepage";
import Degerlendirmeler from "../../../pages/Platform/Degerlendirmeler/Degerlendirmeler";


export default function Dashboard() {
  return (
    
      <Routes>
        <Route path='/' element={<DashboardRoute><Homepage/></DashboardRoute>}></Route>
        <Route path="/degerlendirmeler" element={<DashboardRoute><Degerlendirmeler/></DashboardRoute>}></Route>
        <Route path="/profilim" element={<DashboardRoute><Profile /></DashboardRoute>}></Route>
        <Route path="/profilimi-duzenle/*" element={<DashboardRoute><ProfileEdit/></DashboardRoute>}></Route>       
        <Route path="/takvim" Component={Calendar}></Route>
      </Routes>
    

  )
}
