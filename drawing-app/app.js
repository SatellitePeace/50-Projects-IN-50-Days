const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
const colorEl = document.getElementById("color");
const number = document.getElementById("number");

let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;

// Event Listeners
canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
// canvas mouseup
canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
  x = e.undefined;
  y = e.undefined;
});
// canvas mouse move
canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});
// button listenres
// increase size
increase.addEventListener("click", function () {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSize();
});
// decrease size
decrease.addEventListener("click", function () {
  size -= 5;
  if (size < 5) {
    size = 2;
  }
  updateSize();
});
// color
colorEl.addEventListener("change", function (e) {
  color = e.target.value;
});
// clear everything
clear.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
});
// Draw Circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);

  ctx.fillStyle = color;
  ctx.fill();
}
// Draw Line
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
// Update Size Function
function updateSize() {
  number.innerHTML = size;
}
// drawCircle();
// drawLine();
