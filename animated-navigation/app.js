const btnToggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

// event listener
btnToggle.addEventListener("click", function () {
  btnToggle.parentNode.classList.toggle("active");
  //   OR
  //   nav.classList.toggle("active");
});
