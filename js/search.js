let searchInput = document.getElementById("search-input");

let searchButton = document.getElementById("search-button")

async function search(){
let searchQuery = searchInput.value;
// console.log(searchQuery)
let res = await fetch(`https://patricks-bookshelf.herokuapp.com/search/${searchQuery}`)
let data = await res.json();
console.log(data.payload)
}

searchButton.addEventListener("click", ((e)=>{
    e.preventDefault(),
    search();
}))