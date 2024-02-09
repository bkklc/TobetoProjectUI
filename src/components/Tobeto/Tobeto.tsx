import { Route, Routes } from 'react-router-dom'

import IstanbulCoding from '../../pages/IstanbulCoding/IstanbulCoding'
import Gallery from '../../pages/IstanbulCoding/Gallery/Gallery'
import TobetoFooter from './Footer/TobetoFooter'
import TobetoRoute from './TobetoRoute/TobetoRoute'
import Login from '../../pages/Tobeto/Auth/Login'
import Register from '../../pages/Tobeto/Auth/Register'

export default function Tobeto() {
  return (
    <Routes>
        <Route path="/giris" element={<TobetoRoute><Login/></TobetoRoute>}></Route>
        <Route path="/kayit-ol" element={<TobetoRoute><Register/></TobetoRoute>}></Route>
        <Route path="/istanbul-kodluyor" Component={IstanbulCoding}></Route>
        <Route path="/istanbul-kodluyor/galeri" Component={Gallery}></Route>
    </Routes>
  )
}
