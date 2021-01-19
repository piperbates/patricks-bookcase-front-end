import "./App.css";
import React from "react";
import Authorized from "./components/Authorized";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      
        <div>
        <Authorized user={user} />
      </div>
    );
  }
}

export default App;
