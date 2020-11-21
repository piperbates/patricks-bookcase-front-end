let url = window.location.href;

let ref = url.charAt(url.length - 1);
ref = parseInt(ref) - 1;

async function displayBookById() {
  let library = await getData();
  document.title = document.title + " " + library[ref].title;
  console.log(library[ref]);
  let num = Object.keys(library[ref]);
  console.log(num)
  let tr = document.createElement("tr")
  
  
  num.map((x)=>{
    let td = document.createElement("td")
    if (x != "id") {
        if (x === "title") {
          td.innerText=library[ref].title
          tr.appendChild(td)
        } else if (x === "author") {
            td.innerText = library[ref].author;
          tr.appendChild(td)
        } else if (x === "genre") {
          td.innerText = library[ref].genre;
          tr.appendChild(td)
        } else if (x === "read") {
          td.innerText = library[ref].read;
          tr.appendChild(td)
        } else if (x === "series") {
          td.innerText = library[ref].series;
          tr.appendChild(td)
        } else if (x === "leant") {
          td.innerText = library[ref].leant;
          tr.appendChild(td)
        }
        
    }
}
)
bookByIdTable.appendChild(tr);

  //   num.map((x) => {});

  //   let tr = document.createElement("tr");
  //   let td = document.createElement("td");
}

displayBookById();
