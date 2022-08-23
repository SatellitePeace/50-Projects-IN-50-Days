const container = document.getElementById("container");

const colors = ["yellow", "orange", "red", "lawngreen", "white", "blue"];

const SQUARES = 500;

for (i = 0; i < SQUARES; i++) {
  const sqaures = document.createElement("div");
  sqaures.classList.add("sqaure");

  sqaures.addEventListener("mouseover", () => setColor(sqaures));
  sqaures.addEventListener("mouseout", () => removeColor(sqaures));

  container.appendChild(sqaures);
}

function setColor(sqaures) {
  const color = getRandomColor();
  sqaures.style.background = color;
  sqaures.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`;
}

function removeColor(sqaures) {
  sqaures.style.backgroundColor = "#1d1d1d";
  sqaures.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
