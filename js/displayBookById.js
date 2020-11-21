let url = window.location.href;
let split = url.split("?");
let ref = split[1];

async function displayBookById() {
  let res = await fetch(`https://patricks-bookshelf.herokuapp.com/book/${ref}`);
  let data = await res.json();
  let info = data.payload[0];

  document.title = document.title + " " + info.title;
  let num = Object.keys(info);
  let tr = document.createElement("tr");

  num.map((x) => {
    let td = document.createElement("td");
    if (x != "id") {
      if (x === "title") {
        td.innerText = info.title;
        console.log(info.title);
        tr.appendChild(td);
      } else if (x === "author") {
        td.innerText = info.author;
        tr.appendChild(td);
      } else if (x === "genre") {
        td.innerText = info.genre;
        tr.appendChild(td);
      } else if (x === "read") {
        td.innerText = info.read;
        tr.appendChild(td);
      } else if (x === "series") {
        td.innerText = info.series;
        tr.appendChild(td);
      } else if (x === "leant") {
        td.innerText = info.leant;
        tr.appendChild(td);
      }
    }
  });
  bookByIdTable.appendChild(tr);

  num.map((x) => {});

  // let tr = document.createElement("tr");
  // let td = document.createElement("td");
}

displayBookById();
