const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const main = document.querySelector(".main");
const boxes = document.querySelectorAll(".box");
// Button Behaviour
btn.addEventListener("click", function () {
  input.classList.toggle("active");
  input.focus();
});
// remove active class through the main content
main.addEventListener("click", function () {
  input.classList.remove("active");
});
// BODY BEHAVIOUR
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const boxTop = window.innerHeight;
  boxes.forEach(function (box) {
    const triggerScroll = box.getBoundingClientRect().top;
    if (boxTop > triggerScroll) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
