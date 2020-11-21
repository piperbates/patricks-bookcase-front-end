let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let series = document.getElementById("series");
let leant = document.getElementById("leant");

function addNewBook() {
    
  inputTitle = title.value;
  inputAuthor = author.value;
  inputGenre = genre.value;
  inputRead = document.getElementById("read");
  inputSeries = series.value;
  inputLeant = leant.value;
  readValue = false;



  if(inputTitle=== "" || inputAuthor === "" || inputGenre === ""){
      if(inputTitle=== ""){
    changeFormColour(title)}
    if(inputAuthor === ""){
    changeFormColour(author)}
    if(inputGenre === ""){
    changeFormColour(genre)}
    return;
}
if(inputTitle && inputAuthor && inputGenre){
    title.classList.remove("form-required");
    author.classList.remove("form-required");
    genre.classList.remove("form-required");

  function checkRead() {
    if (inputRead.checked === true) {
      readValue = true;
    } else {
      readValue = false;
    }
  }

  checkRead();

  function postInfo() {
    fetch(`https://patricks-bookshelf.herokuapp.com/add`, {
      method: "post",
      body: JSON.stringify({
        title: inputTitle,
        author: inputAuthor,
        genre: inputGenre,
        read: readValue,
        series: inputSeries,
        leant: inputLeant,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data)) 
      .catch((error) => console.log(error, "my error")); 
  }

  postInfo();
}
}

submitNewBookButton.addEventListener("click", (e) => {
 
    e.preventDefault();
    addNewBook();
});

submitNewBookButton.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
