const hourNeedle = document.querySelector(".hours");
const minuteNeedle = document.querySelector(".minutes");
const secondsNeedle = document.querySelector(".seconds");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const btnColourModeToggle = document.getElementById("toggle");

// Dark Mode Toggle
btnColourModeToggle.addEventListener("click", function (e) {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

// Arrays Of Days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Array of months
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// SET  AND SHOW TIME FUNCTION

function setTime() {
  // set time variable
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = time >= 12 ? "PM" : "AM";

  //   set clcok needles
  //   hours
  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  //   minutes
  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  //  seconds
  secondsNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  //   set time
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amPm} `;
  //   set date
  dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(() => {
  setTime();
}, 1000);
