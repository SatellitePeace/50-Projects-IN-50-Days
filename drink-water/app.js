const remaining = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const liters = document.querySelector(".liters");
const smallCups = document.querySelectorAll(".small-cups");

// Loop through small cups
smallCups.forEach(function (cup, index) {
  // add event listener
  cup.addEventListener("click", function () {
    // call highLight function
    highlightFilledCups(index);
  });
});
updateBigCup();
// Create Hihjlight Funtion
function highlightFilledCups(index) {
  // remove highlight on click like a toggle
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  // loop through small cups to add highlights
  smallCups.forEach(function (cup, index2) {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

// Create function to update the big cup
function updateBigCup() {
  const fullCups = document.querySelectorAll(".small-cups.full").length;
  const totalCups = smallCups.length;
  // add styling and conditionals for percentage
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  // add conditionals for the liter
  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = "visible";
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
}
