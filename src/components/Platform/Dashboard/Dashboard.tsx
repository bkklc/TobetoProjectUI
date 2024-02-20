import ProfileEdit from "../../../pages/Platform/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../../pages/Platform/Profile/Profile";
import Calendar from "../../../pages/Platform/Calendar/Calendar";
import DashboardRoute from "../DashboardRoute/dashboardRoute";
import Homepage from "../../../pages/Platform/Homepage/Homepage";
import Degerlendirmeler from "../../../pages/Platform/Degerlendirmeler/Degerlendirmeler";
import Catalog from "../../../pages/Platform/Catalog/Catalog";
import {  useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Courses from "../../../pages/Platform/Courses/Courses";
import Announcement from "../../../pages/Platform/Announcement/Announcement";
import Survey from "../../../pages/Platform/Survey/Survey";


export default function Dashboard() {

  const WrapperWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <WrapperWrapper>
      <DashboardRoute path="/" element={<Homepage />} />
      <DashboardRoute path="/platform" element={<Homepage />} />
      <DashboardRoute path="/degerlendirmeler" element={<Degerlendirmeler />} />
      <DashboardRoute path="/profilim" element={<Profile />} />
      <DashboardRoute path="/profilimi-duzenle/*" element={<ProfileEdit />} />
      <DashboardRoute path="/takvim" element={<Calendar />} />
      <DashboardRoute path="/platform-katalog" element={<Catalog />} />
      <DashboardRoute path="/eğitimlerim" element={<Courses />} />
      <DashboardRoute path="/duyurular" element={<Announcement />} />
      <DashboardRoute path="/anketler" element={<Survey />} />

    </WrapperWrapper>
  )
}


