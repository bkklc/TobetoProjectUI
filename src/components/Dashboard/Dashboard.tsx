import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";
import MyProfile from "../../pages/MyProfile/MyProfile";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path="/degerlendirmeler" Component={Degerlendirmeler}></Route>
        <Route path="/profilim" Component={MyProfile}></Route>
    </Routes>
  )
}
