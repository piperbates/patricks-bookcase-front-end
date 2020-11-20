async function displayData() {
  let library = await getData();
  console.log(library)
  let num;
  library.map((i) => {
    num = Object.keys(i);
    let tr = document.createElement("tr");
    console.log(i)
    num.map((x) => {
      
      td = document.createElement(`td`);
      if(x!="id"){
      
      if(x==="title"){
        let a = document.createElement("a");
        a.setAttribute("href", `book/${i.id}`)
        a.innerText = i.title;
        td.appendChild(a);
      } 
      
      else if (x==="author"){
        td.innerText = i.author
      } 
      
      else if (x==="genre"){
        td.innerText = i.genre
      } 
      
      
      
     else if (x==="read"){
        td.innerText = i.read
      } 
      else if (x==="series"){
        td.innerText = i.series
      } 
      
      else if (x==="leant"){
        td.innerText = i.leant
      }
      td.classList.add(x)
      tr.appendChild(td);
    }});
    libraryTable.appendChild(tr);
  });
}

displayData();
