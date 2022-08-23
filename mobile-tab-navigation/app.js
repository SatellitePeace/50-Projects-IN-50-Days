const content = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    removeContent();
    removeListLtems();
    item.classList.add("active");

    content[index].classList.add("show");
  });
});

function removeContent() {
  content.forEach((content) => {
    content.classList.remove("show");
  });
}
function removeListLtems() {
  listItems.forEach((lists) => {
    lists.classList.remove("active");
  });
}
