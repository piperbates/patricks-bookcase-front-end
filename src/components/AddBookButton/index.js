import React from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

export default function LogOutButton() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <></>
    } else {
    return (
    isAuthenticated &&
    <div id="add-book-button-box">
          <Link to="/add-book">
            <button id="add-book-button">Add New Book</button>
          </Link>
        </div>)
}}