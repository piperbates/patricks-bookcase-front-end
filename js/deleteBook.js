function deleteBook() {
    let url = window.location.href;
let split = url.split("?")
let id = split[1];

  fetch(`https://patricks-bookshelf.herokuapp.com/delete/${id}`, {
    method: "delete",
    body: JSON.stringify({
    //   title: inputTitle,
    //   author: inputAuthor,
    //   genre: inputGenre,
    //   read: readValue,
    //   series: inputSeries,
    //   leant: inputLeant,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error, "my error"));
}



deleteBookButton.addEventListener(
  "click", (() => {
    deleteBook();
  })
);
