const sounds = ["clap", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(function (sound) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", function () {
    // stop sound
    stopSounds();
    // play sound on click
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
// function for stopping sounds
function stopSounds() {
  sounds.forEach(function (sound) {
    document.getElementById(sound).pause();
  });
}
