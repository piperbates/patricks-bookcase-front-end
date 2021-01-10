import './App.css';
import React from "react"
import LogInPage from "./components/LogInPage"
import Authorized from "./components/Authorized"

import { useAuth0 } from "@auth0/auth0-react"

function App() {
  console.log("Hi")
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isLoading) return <div>Loading...</div>;
  if(isAuthenticated){
} else {
  console.log("Logged out")
}

if(!isAuthenticated)  {return(
  <LogInPage />)
}


  return (
    isAuthenticated && <div>
    
    <Authorized user={user}/>
    </div>
  );
}

export default App;
