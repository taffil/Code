const button = document.querySelector("#button")
const navbar = document.querySelector("#nav");
const logbar = document.querySelector("#log");

button.addEventListener("click", function() {
    navbar.classList.toggle("passive")
    logbar.classList.toggle("passive")
});

// function myFunction() {
//     var x = document.getElementById("button");
//     if (navbar.style.display === "") {
//         x.style.display = "flex";
//         // x.classList.append(".felx-center-evenly")
//     } else {
//         x.style.display = "";
//         // x.classList.remove(".felx-center-evenly")
//     }
// }