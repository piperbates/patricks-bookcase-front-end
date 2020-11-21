async function displayData() {
  let library = await getData();
  let num;
  library.map((i) => {
    // console.log(i.id)
    // console.log(library[i])
    num = Object.keys(i);
    let tr = document.createElement("tr");
    num.map((x) => {
      td = document.createElement(`td`);
      if (x != "id") {
        if (x === "title") {
          let a = document.createElement("a");
          
          let id = i.id
          // console.log(`book.html?${id}`)
          
          a.setAttribute("href", `book.html?${id}`);
          a.innerText = i.title;
          td.appendChild(a);
        } else if (x === "author") {
          td.innerText = i.author;
        } else if (x === "genre") {
          td.innerText = i.genre;
        } else if (x === "read") {
          td.innerText = i.read;
        } else if (x === "series") {
          td.innerText = i.series;
        } else if (x === "leant") {
          td.innerText = i.leant;
        }
        td.classList.add(x);
        tr.appendChild(td);
      }
    });
    libraryTable.appendChild(tr);
  });
}

displayData();
