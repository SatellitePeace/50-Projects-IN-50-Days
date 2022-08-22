const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const images = document.querySelectorAll("#imgs img");
const singleImg = document.getElementById("imgs");

let index = 0;

let interval = setInterval(() => {
  run();
}, 2000);

function run() {
  index++;
  imageSwiper();
}

function imageSwiper() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  singleImg.style.transform = `translateX(${-index * 500}px)`;
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    run();
  }, 4000);
}

rightBtn.addEventListener("click", () => {
  index++;
  imageSwiper();
});

leftBtn.addEventListener("click", () => {
  index--;
  imageSwiper();
  resetInterval();
});
