const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
// FOR  INCREASING THE WIDTH OF THE RIGHT SIDE
right.addEventListener("mouseenter", function () {
  container.classList.add("hover-right");
});
// FOR  DECREASING THE WIDTH OF THE RIGHT SIDE
right.addEventListener("mouseleave", function () {
  container.classList.remove("hover-right");
});

left.addEventListener("mouseenter", function () {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", function () {
  container.classList.remove("hover-left");
});
