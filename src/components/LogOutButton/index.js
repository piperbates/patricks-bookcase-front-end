import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css"

export default function LogOutButton() {
    const { logout, isAuthenticated } = useAuth0();

    return (
    isAuthenticated &&
    <button id="log-out-button" className="log-button" onClick={()=> logout()}>Log Out</button>)
}