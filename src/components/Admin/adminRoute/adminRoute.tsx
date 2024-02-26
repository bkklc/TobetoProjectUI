import { Route, Routes } from "react-router-dom";
import NavbarComponent from "../../Platform/Navbar/NavbarComponent";
import Footer from "../../Platform/Footer/Footer";
import ProtectedRoute from "../../Platform/ProtectedRoute/ProtectedRoute";
import AdminProtectedRoute from "../adminProtectedRoute/adminProtectedRoute";

type Props = {
  element: any;
  path: string;
};


export default function AdminRoute(props: Props) {
  return (
    <>           
        <Routes>
          <Route path={props.path} element={<ProtectedRoute><AdminProtectedRoute><NavbarComponent />{props.element}<Footer /></AdminProtectedRoute></ProtectedRoute>}></Route>
        </Routes>
    </>

  )
}
