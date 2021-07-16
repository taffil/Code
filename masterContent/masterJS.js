AOS.init();

const button = document.querySelector("#button")
const navbar = document.querySelector("#nav");
const logbar = document.querySelector("#log");

button.addEventListener("click", function() {
    navbar.classList.toggle("passive")
    logbar.classList.toggle("passive")
});