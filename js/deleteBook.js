function deleteBook() {
  let url = window.location.href;
  let split = url.split("?")
  let id = split[1];
  
  fetch(`https://patricks-bookshelf.herokuapp.com/delete/${id}`, {
    method: "delete",
    body: JSON.stringify({
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error, "my error"));

    

}



deleteBookButton.addEventListener(
  "click", (() => {
    let confirmDelete = confirm(`Are you sure you want to delete this book?`)
    if(confirmDelete){
    deleteBook();} else {
      return;
    }
  })
);
