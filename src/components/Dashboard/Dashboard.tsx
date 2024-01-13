import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path="/degerlendirmeler" Component={Degerlendirmeler}></Route>
    </Routes>
  )
}
