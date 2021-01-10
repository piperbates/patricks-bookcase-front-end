import React, {useState} from "react";
import LogOutButton from "../LogOutButton";
import "./style.css";
import logo from "../../images/logo.png"
// import {search} from "../../functions/search";

import { Link } from "react-router-dom";

import { Input } from "antd";

const { Search } = Input;

// Need to now get searchValue 

export default function HeaderBar({ nickname, bookCount }) {
  const [searchValue, setSearchValue] = useState("");

  
  async function search(searchTerm){
    // let searchQuery = searchInput.value;
    // console.log(searchQuery)
    let res = await fetch(`https://patricks-bookshelf.herokuapp.com/search/${searchTerm}`)
    let data = await res.json();
    setSearchValue(data.payload)
    // window.location.href = "/?search/" + searchValue;
    }

    
  console.log(searchValue)
  return (
    <header>
      <div className="header-wrapper" id="header-items-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <span id="welcome" className="header-text">
          Welcome {nickname}
        </span>
        <span id="book-count">Total Books: {bookCount} </span>
      </div>
      <div className="header-wrapper" id="header-items-right">
        <Link to="/add-book">
          <button id="add-book-button">Add New Book</button>
        </Link>
        <div id="search-box">
        <Search
          placeholder="input search text"
          onSearch={(value)=>{search(value)}}
          id="search"
        />
        </div>
        <LogOutButton />
      </div>
    </header>
  );
}
