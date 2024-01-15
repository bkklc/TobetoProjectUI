import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";
import MyProfile from "../../pages/MyProfile/MyProfile";
import Login from "../../pages/Auth/Login";
import ProfileInfo from "../../pages/ProfileInfo/ProfileInfo";
import Register from "../../pages/Auth/Register";
import PersonalInfo from "../ProfileInfo/PersonalInfo";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path="/degerlendirmeler" Component={Degerlendirmeler}></Route>
        <Route path="/profilim" Component={MyProfile}></Route>
        <Route path ="/profilBilgileri" Component={ProfileInfo}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/kayit-ol" Component={Register}></Route>
        <Route path="/profilBilgileri/kisiselBilgilerim" Component={PersonalInfo}></Route>
    </Routes>
  )
}
