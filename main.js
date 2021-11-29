const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("transform");
  nav.classList.toggle("transform");
});
const header = document.querySelector(".header");
window.addEventListener("scroll" , () => {
        header.classList.toggle("fixed", window.scrollY > 30);
});