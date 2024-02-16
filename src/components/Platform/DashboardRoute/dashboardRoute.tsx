import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

type Props = {
  children: any;
};

const DashboardRoute = (props: Props) => {
  return (
    <>
    <ProtectedRoute>
      <NavbarComponent />
      {props.children}
      <Footer />
    </ProtectedRoute>
      
    </>
  );
};

export default DashboardRoute;
