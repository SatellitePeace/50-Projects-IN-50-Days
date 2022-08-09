const counters = document.querySelectorAll(".counter");
// loop through
counters.forEach(function (count) {
  count.innerText = 0;
  function updateCounter() {
    const add = count.innerText++;
    const target = count.getAttribute("data-target");
    const increase = target / 300;
    if (add < target) {
      count.innerText = `${Math.ceil(add + increase)}`;
      setTimeout(updateCounter, 1);
    } else {
      count.innerText = target;
    }
  }
  updateCounter();
});
