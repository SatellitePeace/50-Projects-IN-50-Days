const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let load = 0;
const loadTime = setInterval(loaded, 30);
function loaded() {
  load++;
  if (load > 99) {
    clearInterval(loadTime);
  }
  loading.innerText = `${load}%`;

  // Calculation for controlling filter and percentages
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  // gradually remove filter(blur) as percentage loading increases
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  //   remove loading percentage
  loading.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
}
