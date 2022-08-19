// const nav = document.querySelector(".nav");
// window.addEventListener("scroll", fixedNav);

// function fixedNav() {
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// }

// OR

const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  sticky = nav.offsetTop;
  if (window.scrollY > sticky + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
