// const textEl = document.getElementById("text");
// const speedEl = document.getElementById("speed");

// const text = "We Love Programming!";

// let index = 1;

// let speed = 300 / speedEl.value;

// writeText();

// function writeText() {
//   textEl.innerHTML = text.slice(0, index);

//   index++;
//   if (index > text.length) {
//     index = 1;
//   }
//   setTimeout(() => {
//     writeText();
//   }, speed);
// }

// speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

let text = "I Love Programming!";
let speed = 300 / speedEl.value;
let index = 1;

autoText();

function autoText() {
  textEl.innerHTML = text.slice(0, index);

  index++;
  if (index > text.length) {
    index = 1;
  }

  setTimeout(() => {
    autoText();
  }, speed);

  speedEl.addEventListener("input", function (e) {
    speed = 300 / e.target.value;
  });
}
