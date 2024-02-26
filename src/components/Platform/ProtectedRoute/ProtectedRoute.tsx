import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import tokenDecode from "../../../hooks/tokenDecode";

type Props = {
	children: any;
};

const ProtectedRoute = (props: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		let token = localStorage.getItem("Token");
		const currentTime: number = Math.floor(Date.now() / 1000);
		if (!token) {
			navigate("/giris");
		}
		else if (tokenDecode().exp < currentTime)
		{
			localStorage.removeItem("Token");
		}
	});

	return <>{props.children}</>;
};

export default ProtectedRoute;
