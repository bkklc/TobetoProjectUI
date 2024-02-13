import { jwtDecode } from 'jwt-decode';

export default function tokenDecode() {
    var decodedToken = {
        Email: "",
        ID: "0",
        Name: "",
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": "",
        aud: "",
        exp: 0,
        iss: "Tobeto",
        nbf: 0
    };
    if (localStorage.getItem("Token")) {
        decodedToken = jwtDecode(`${localStorage.getItem("Token")}`);
    }
    return decodedToken;  
}
