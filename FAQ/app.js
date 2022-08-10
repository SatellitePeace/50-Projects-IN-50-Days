const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentNode.classList.toggle("active");
  });
});
