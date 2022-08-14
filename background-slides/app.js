const body = document.body;
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

rightBtn.addEventListener("click", function () {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgSlide();
  setActiveSlide();
});

leftBtn.addEventListener("click", function () {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgSlide();
  setActiveSlide();
});

setBgSlide();

function setBgSlide() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}
