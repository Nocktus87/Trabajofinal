
let btn = document.getElementById("btn");
let hidetext = document.getElementById("hidetext");

btn.addEventListener("click", toggleText);

function toggleText() {
    hidetext.classList.toggle("show");
}