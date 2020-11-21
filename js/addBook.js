function addNewBook(/* title, author, genre, read, series, leant */) {
  let inputTitle = document.getElementById("title").value;
  let inputAuthor = document.getElementById("author").value;
  let inputGenre = document.getElementById("genre").value;
  let inputRead = document.getElementById("read").value;
  let inputSeries = document.getElementById("series").value;
  let inputLeant = document.getElementById("leant").value;
  console.log(
    inputTitle,
    inputAuthor,
    inputGenre,
    inputRead,
    inputSeries,
    inputLeant
  );

  // let newBook = {
  //     title: inputTitle,
  //     author: inputAuthor,
  //     genre: inputGenre,
  //     read: inputRead,
  //     series: inputSeries,
  //     leant: inputLeant
  // }

  //Something about this fetch request is not right and I'm not sure why :(
  //The post request works fine on Postman, so I know my backend is working okay
  //Line 10 console logs the correct information, so I don't understand how to add that to the fetch request below.
  //Something to work on for tomorrow!!

  function postInfo() {
    fetch(`https://patricks-bookshelf.herokuapp.com/add`, {
      method: "post",
      body: JSON.stringify({
        title: inputTitle,
        author: inputAuthor,
        genre: inputGenre,
        read: inputRead,
        series: inputSeries,
        leant: inputLeant,
      }),
      headers: { "Content-Type": "application/json" },
      //Validation: ContentType
    })
      .then((res) => res.json()) //res.json() is an async function
      .then((data) => console.log(data)) //In the browser
      .catch((error) => console.log(error, "my error")); //uncaught promise rejection. The promise throws and error and I need to catch otherwise it will be thrown into the ether
    };
  

  postInfo();

}
      submitNewBookButton.addEventListener("click", () => {
        addNewBook(/* inputTitle, inputAuthor, inputGenre, inputRead, inputSeries, inputLeant */);
      });
