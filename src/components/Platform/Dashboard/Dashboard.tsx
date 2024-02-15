import ProfileEdit from "../../../pages/Platform/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../../pages/Platform/Profile/Profile";
import Calendar from "../../../pages/Platform/Calendar/Calendar";
import DashboardRoute from "../DashboardRoute/dashboardRoute";
import Homepage from "../../../pages/Platform/Homepage/Homepage";
import Degerlendirmeler from "../../../pages/Platform/Degerlendirmeler/Degerlendirmeler";
import Catalog from "../../../pages/Platform/Catalog/Catalog";
import {Routes, Route, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';


export default function Dashboard() {

  const WrapperWrapper = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
return (
  <WrapperWrapper>
      <Routes>
        <Route path='/' element={<DashboardRoute><Homepage/></DashboardRoute>}></Route>
        <Route path="/platform" element={<DashboardRoute><Homepage/></DashboardRoute>}></Route>
        <Route path="/degerlendirmeler" element={<DashboardRoute><Degerlendirmeler/></DashboardRoute>}></Route>
        <Route path="/profilim" element={<DashboardRoute><Profile /></DashboardRoute>}></Route>
        <Route path="/profilimi-duzenle/*" element={<DashboardRoute><ProfileEdit/></DashboardRoute>}></Route>       
        <Route path="/takvim" element={<DashboardRoute><Calendar/></DashboardRoute>}></Route> 
        <Route path="/platform-katalog" element={<DashboardRoute><Catalog/></DashboardRoute>}></Route>
      </Routes>
  </WrapperWrapper>
  )
}


