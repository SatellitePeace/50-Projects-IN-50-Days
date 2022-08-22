const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDom() {
  counter.classList.remove("hide");
  final.classList.remove("show");

  nums.forEach((number) => {
    number.classList.value = "";
  });
  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach(function (number, index) {
    const nextToLast = number.length - 1;

    number.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && index !== nextToLast) {
        number.classList.remove("in");
        number.classList.add("out");
      } else if (e.animationName === "goOut" && number.nextElementSibling) {
        number.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
