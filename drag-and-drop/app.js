const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (empty of empties) {
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragLeave() {
  this.className = "empty";
}

function dragEnter(e) {
  this.className += " hovered";
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnd() {
  this.className = "fill";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
