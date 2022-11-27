// Declaración de variables
const burguerIcon = document.querySelector("#burguer-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const section = document.querySelector("section");
const footer = document.querySelector("footer");


// LLamadas a las funciones
burguerIcon.addEventListener("click", togleMobileMenu);
mobileMenu.addEventListener("click", togleMobileMenu);
section.addEventListener("click", togleMobileMenu);
footer.addEventListener("click", togleMobileMenu);


// Declaración de funciones
function togleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
};

function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
}