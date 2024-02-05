import TobetoFooter from "../Footer/TobetoFooter";
import Banner from "../Navbar/Banner";
import TobetoNavbar from "../Navbar/TobetoNavbar";

type Props = {
	children: any;
};

const TobetoRoute = (props: Props) => {
    return(
        <>
        <Banner/>
        <TobetoNavbar/>
        {props.children}
        <TobetoFooter/>
        </>
        
    )
}

export default TobetoRoute;
