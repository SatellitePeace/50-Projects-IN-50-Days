const message = ["Message One", "Message Two", "Message Three", "Message Four"];

const types = ["error", "success", "pending"];

const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

btn.addEventListener("click", () => getMessage());

function getMessage(types = null) {
  const div = document.createElement("div");
  div.classList.add("toast");

  div.classList.add(types ? types : showRandomType());

  div.innerText = showRandomMessage();
  toasts.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
}

function showRandomMessage() {
  return message[Math.floor(Math.random() * message.length)];
}

function showRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
