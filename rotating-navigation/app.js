const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const content = document.querySelector(".content");

// Open Nav
open.addEventListener("click", function () {
  container.classList.add("show-nav");
});
// Close Nav With
content.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
// Close nav by Clicking content
close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
