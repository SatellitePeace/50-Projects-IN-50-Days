const container = document.querySelector(".container");
const key = document.querySelectorAll(".key");

window.addEventListener("keydown", generateKey);
// Create Function
function generateKey(e) {
  container.innerHTML = ` <div class="key">
        ${e.key === " " ? "space" : e.key}
        <small>event.Key</small>
      </div>
      <div class="key">
       ${e.keyCode}
        <small>event.KeyCode</small>
      </div>
      <div class="key">
     ${e.code}
        <small>event.Code</small>
      </div>`;
}
