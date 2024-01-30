import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import ProfileEdit from "../../pages/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../pages/Profile/Profile";
import IstanbulCoding from "../../pages/IstanbulCoding/IstanbulCoding";
import Calendar from "../../pages/Calendar/Calendar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Gallery from "../../pages/IstanbulCoding/Gallery/Gallery";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' element={<ProtectedRoute><Homepage/></ProtectedRoute>}></Route>
        <Route path="/degerlendirmeler" element={<ProtectedRoute><Degerlendirmeler/></ProtectedRoute>}></Route>
        <Route path="/profilim" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        <Route path="/profilimi-duzenle/*" element={<ProtectedRoute><ProfileEdit/></ProtectedRoute>}></Route>
        <Route path="/giris" Component={Login}></Route>
        <Route path="/kayitOl" Component={Register}></Route>     
        <Route path="/istanbul-kodluyor" Component={IstanbulCoding}></Route>  
        <Route path="/istanbul-kodluyor/galeri" Component={Gallery}></Route> 
        <Route path="/takvim" Component={Calendar}></Route>     
    </Routes>
  )
}
