import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

type Props = {
  element: any;
  path: string;
};

const DashboardRoute = (props: Props) => {
  return (
    <>           
        <Routes>
          <Route path={props.path} element={<ProtectedRoute><NavbarComponent />{props.element}<Footer /></ProtectedRoute>}></Route>
        </Routes>   
    </>
  );
};

export default DashboardRoute;
