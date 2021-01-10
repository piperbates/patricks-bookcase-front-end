import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import Footer from "../Footer"


export default function LogInButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div id="login-box">
      <h1>Patricks Bookcase</h1>
        <button onClick={() => loginWithRedirect()} className="log-button">
          Log In
        </button>
        
        <Footer />
      </div>
    );
  } else {
    return <p>Logged in</p>;
  }
}
