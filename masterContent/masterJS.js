const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // mobileNav.toggle()
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "flex";
        // x.classList.append(".felx-center-evenly")
    } else {
        x.style.display = "none";
        // x.classList.remove(".felx-center-evenly")
    }
}