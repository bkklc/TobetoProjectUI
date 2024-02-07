import Banner from "../../Tobeto/Navbar/Banner";
import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";

type Props = {
  children: any;
};

const DashboardRoute = (props: Props) => {
  return (
    <>
      <NavbarComponent />
      {props.children}
      <Footer />
    </>
  );
};

export default DashboardRoute;
