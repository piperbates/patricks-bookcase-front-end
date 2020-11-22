let libraryLength;

function changeFormColour(input){
    input.classList.remove("form-required")
    input.classList.add("form-required")
}
let nav = document.querySelector("nav");

//toggle menu
function toggleMenu(){
    nav.classList.toggle("hidden")

}

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", toggleMenu);