import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css"

export default function LogOutButton() {
    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return (
          <button onClick={() => loginWithRedirect()} className="log-button">
            Log In
          </button>
        ) 
    } else {
    return (
    isAuthenticated &&
    <button id="log-out-button" className="log-button" onClick={()=> logout()}>Log Out</button>)}
}