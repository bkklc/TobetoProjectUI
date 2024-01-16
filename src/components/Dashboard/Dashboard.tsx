import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import ProfileEdit from "../../pages/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../pages/Profile/Profile";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path="/degerlendirmeler" Component={Degerlendirmeler}></Route>
        <Route path="/profilim" Component={Profile}></Route>
        <Route path ="/profilBilgileri" Component={ProfileEdit}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/kayit-ol" Component={Register}></Route>       
    </Routes>
  )
}
