const loveMe = document.querySelector(".loveme");
const times = document.getElementById("times");

let clickTime = 0;
let numberClicked = 0;

loveMe.addEventListener("click", function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 1000) {
      likeHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function likeHeart(e) {
  const x = e.clientX;
  const y = e.clientY;

  const topOffset = e.target.offsetTop;
  const leftOffset = e.target.offsetLeft;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  const heart = document.createElement("i");
  heart.classList.add("bi");
  heart.classList.add("bi-heart-fill");

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++numberClicked;
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
