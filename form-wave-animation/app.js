const labels = document.querySelectorAll(".form-control label");
// WITH ARROW FUNCTION
// labels.forEach(function (label) {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, index) =>
//         `<span style="transition-delay:${index * 50}ms"> ${letter}</span>`
//     )
//     .join("");
// });

labels.forEach(function (label) {
  label.innerHTML = label.innerText
    .split("")
    .map(function (letter, index) {
      return `<span style="transition-delay:${index * 50}ms"> ${letter}</span>`;
    })
    .join("");
});
