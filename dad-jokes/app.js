const btn = document.getElementById("joke-btn");
const JokeText = document.querySelector(".joke");

// Add event listener
btn.addEventListener("click", generateJokes);
// call api function
generateJokes();
// Create api function
async function generateJokes() {
  const jokes = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const response = await jokes.json();
  JokeText.innerHTML = response.joke;
}
