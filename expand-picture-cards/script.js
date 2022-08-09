const panels = document.querySelectorAll(".panel");

panels.forEach(function (item) {
  item.addEventListener("click", function () {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach(function (item) {
    item.classList.remove("active");
  });
}
