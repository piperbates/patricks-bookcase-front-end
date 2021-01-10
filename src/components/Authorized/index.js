import React, { useState, useEffect } from "react";
import HeaderBar from "../HeaderBar";
import Library from "../Library";
import { Route, Switch, useLocation } from "react-router-dom";
import AddBook from "../AddBook";
import BookById from "../BookById";

function Authorized({ user }) {
  const ref = useLocation().pathname;

  const [library, setLibrary] = useState("");
  const [book, setBook] = useState({});

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://patricks-bookshelf.herokuapp.com/");
      let data = await res.json();
      setLibrary(data.payload);
    }

    getData(); //This function sets the data from the api as the library state to be passed around later.
  }, []);

  //   // Gets the specific book that was selected from the database
  async function getBookId(bookId) {
    let res = await fetch(
      `https://patricks-bookshelf.herokuapp.com/book/${bookId}`
    );
    let data = await res.json();
    setBook(data.payload);
  }

  useEffect(() => {
    let bookIdnum = ref.split("/").pop();
    bookIdnum = parseInt(bookIdnum);
    if (typeof bookIdnum === "number") {
      getBookId(bookIdnum);
    }
  }, [ref]);

  return (
    <div>
      <HeaderBar
        nickname={user.nickname}
        bookCount={library ? library.length : "..."}
      />
      <main>
        <Switch>
          <Route exact path="/">
            <Library visability={library ? true : false} data={library} nickname={user.nickname} />
          </Route>
          <Route path="/add-book">
            <AddBook />
          </Route>
          <Route path="/book/:id">
            <BookById book={book ? book[0] : ""} />
          </Route>
          {/* <Route path="/?search/:id">
           
           <SearchPage />
         </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default Authorized;
