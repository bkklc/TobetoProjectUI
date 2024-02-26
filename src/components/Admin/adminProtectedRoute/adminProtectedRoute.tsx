import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tokenDecode from "../../../hooks/tokenDecode";

type Props = {
    children: any;
};


export default function AdminProtectedRoute(props: Props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (tokenDecode()["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] !== "Admin") {
            navigate("/")
        }
    })

    return <>{props.children}</>
}
