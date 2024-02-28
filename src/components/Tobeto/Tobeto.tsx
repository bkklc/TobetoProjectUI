import { Route, Routes } from 'react-router-dom'
import IstanbulCoding from '../../pages/Platform/IstanbulCoding/IstanbulCoding'
import Gallery from '../../pages/Platform/IstanbulCoding/Gallery/Gallery'
import TobetoRoute from './TobetoRoute/TobetoRoute'
import Login from '../../pages/Tobeto/Auth/Login'
import Register from '../../pages/Tobeto/Auth/Register'
import PasswordUpdated from '../../pages/Tobeto/Auth/PasswordUpdated'
import Aboutus from './About/AboutusComponent'
import CodecademyComponent from './Codecademy/CodecademyComponent'
import TobetoHomePage from './Home/TobetoHomePage'
import ForBusinessPage from './WhatWeOfferPage/ForBusinessPage'
import ForPersonalPage from './WhatWeOfferPage/ForPersonalPage'
import HomePageCatalog from './HomePageCatalog/HomePageCatalog'




export default function Tobeto() {
  return (
    <Routes>
      <Route path="/giris" element={<TobetoRoute><Login /></TobetoRoute>}></Route>
      <Route path="/kayit-ol" element={<TobetoRoute><Register /></TobetoRoute>}></Route>
      <Route path="/şifremi-unuttum" element={<TobetoRoute><PasswordUpdated /></TobetoRoute>}></Route>
      <Route path="/istanbul-kodluyor" Component={IstanbulCoding}></Route>
      <Route path="/istanbul-kodluyor/galeri" Component={Gallery}></Route>
      <Route path="/hakkimizda" element={<TobetoRoute><Aboutus /></TobetoRoute>}></Route>
      <Route path="/codecademy" element={<TobetoRoute><CodecademyComponent /></TobetoRoute>}></Route>
      <Route path="/anasayfa" element={<TobetoRoute><TobetoHomePage/></TobetoRoute>}></Route>
      <Route path="/bireyler-icin" element={<TobetoRoute><ForPersonalPage/></TobetoRoute>}></Route>
      <Route path="/kurumlar-icin" element={<TobetoRoute><ForBusinessPage/></TobetoRoute>}></Route>
      <Route path="/katalog" element={<TobetoRoute><HomePageCatalog/></TobetoRoute>}></Route>

    </Routes>
  )
}
