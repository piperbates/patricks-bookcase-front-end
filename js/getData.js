async function getData() {
    let res = await fetch("https://patricks-bookshelf.herokuapp.com/");
    let data = await res.json();
    return data.payload;
  }

  

  getData();