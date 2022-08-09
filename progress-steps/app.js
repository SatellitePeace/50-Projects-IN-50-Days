const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

// INITIALIZE Active COUNTER

let currentActive = 1;
// Event Listener For Next Btn
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  addProgressSteps();
});

// Event Listener For Prev Btn
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  addProgressSteps();
});

// Create   addProgressSteps Function
function addProgressSteps() {
  // create foreach to loop through circles
  circles.forEach(function (circle, index) {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  //   declare active class and add progress steps
  const actives = document.querySelectorAll(".active");
  // add style/width to progress bar
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // Enable and disables buttons
  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive === 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
