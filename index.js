const burguerIcon = document.querySelector("#burguer-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const section = document.querySelector("section");

burguerIcon.addEventListener("click", togleMobileMenu);
/* bodyDiv.addEventListener("click", closeMobileMenu); */

function togleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
};

function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
}