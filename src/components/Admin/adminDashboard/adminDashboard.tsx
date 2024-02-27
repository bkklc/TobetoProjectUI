import AdminRoute from "../adminRoute/adminRoute";
import AdminPage from "../../../pages/Admin/AdminPage/AdminPage";

export default function AdminDashboard() {
  return (
    <AdminRoute path="/kurumsal/*" element={<AdminPage/>}/>
  )
}
