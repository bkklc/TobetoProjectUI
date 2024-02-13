import { Route, Routes } from "react-router-dom";
import AdminRoute from "../adminRoute/adminRoute";

export default function AdminDashboard() {
  return (
    <Routes>
        <Route path="/admin" element={<AdminRoute/>}/>
    </Routes>   
  )
}
