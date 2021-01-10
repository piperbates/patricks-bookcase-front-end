import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogInButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()} className="log-button">Log In</button>;
  } else {
    return <p>Logged in</p>;
  }
}
