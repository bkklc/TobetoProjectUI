import { jwtDecode } from 'jwt-decode';
import React from 'react'

export default function tokenDecode() {
    var decodedToken = {
        Email: "",
        ID: "0",
        Name: "",
        Role: "",
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
