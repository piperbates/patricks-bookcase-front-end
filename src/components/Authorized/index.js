import React, { useState, useEffect } from "react";
import HeaderBar from "../HeaderBar";
import Library from "../Library";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import AddBook from "../AddBook";
import BookById from "../BookById";
import Footer from "../Footer";
import NotFoundPage from "../NotFoundPage"
import { backendUrl } from "../../constants";

function Authorized({ user }) {
  if(!user){
    user={}
  }

  const ref = useLocation().pathname;

  const [library, setLibrary] = useState("");
  const [book, setBook] = useState({});
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `${backendUrl}/${searchState}`
      );
      let data = await res.json();
      setLibrary(data.payload);
    }

    getData(); //This function sets the data from the api as the library state to be passed around later.
  }, [searchState]);

  //   // Gets the specific book that was selected from the database
  async function getBookId(bookId) {
    let res = await fetch(
      `${backendUrl}/book/${bookId}`
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
        changeSearchText={setSearchState}
      />
      <main>
        <Switch>
          <Route exact path="/">
            <Library
              visability={library ? true : false}
              data={library}
              nickname={user.nickname}
            />
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
         <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default Authorized;
