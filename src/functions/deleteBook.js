export function deleteBook(id) {
  fetch(`https://patricks-bookshelf.herokuapp.com/delete/${id}`, {
    method: "delete",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error, "my error"));
}
