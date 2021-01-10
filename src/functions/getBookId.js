export async function getBookId(bookId) {
     
    let res = await fetch(
      `https://patricks-bookshelf.herokuapp.com/book/${bookId}`
    );
    let data = await res.json();
    return data;
  }