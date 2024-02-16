import { Route, Routes } from 'react-router-dom'
import IstanbulCoding from '../../pages/IstanbulCoding/IstanbulCoding'
import Gallery from '../../pages/IstanbulCoding/Gallery/Gallery'
import TobetoRoute from './TobetoRoute/TobetoRoute'
import Login from '../../pages/Tobeto/Auth/Login'
import Register from '../../pages/Tobeto/Auth/Register'
import PasswordUpdated from '../../pages/Tobeto/Auth/PasswordUpdated'
import Aboutus from './About/AboutusComponent'



export default function Tobeto() {
  return (
    <Routes>
        <Route path="/giris" element={<TobetoRoute><Login/></TobetoRoute>}></Route>
        <Route path="/kayit-ol" element={<TobetoRoute><Register/></TobetoRoute>}></Route>
        <Route path="/şifremi-unuttum" element={<TobetoRoute><PasswordUpdated/></TobetoRoute>}></Route>
        <Route path="/istanbul-kodluyor" Component={IstanbulCoding}></Route>
        <Route path="/istanbul-kodluyor/galeri" Component={Gallery}></Route>
        <Route path="/hakkimizda" element={<TobetoRoute><Aboutus/></TobetoRoute>}></Route>
    </Routes>
  )
}
