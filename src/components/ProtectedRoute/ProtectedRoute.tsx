import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
	children: any;
};

const ProtectedRoute = (props: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		let token = localStorage.getItem("Token");
		if (!token) {
			navigate("/giris");
		}
	}, []);

	return <>{props.children}</>;
};

export default ProtectedRoute;
