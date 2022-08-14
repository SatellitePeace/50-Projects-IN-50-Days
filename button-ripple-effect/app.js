const ripples = document.querySelectorAll(".ripple");

ripples.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft + "px";
    const yInside = y - btnTop + "px";

    const span = document.createElement("span");
    span.classList.add("circle");

    span.style.top = yInside;
    span.style.left = xInside;

    btn.appendChild(span);

    setTimeout(() => span.remove(), 500);
  });
});
