const flash = document.querySelector(".flash");
const camera = document.getElementById("camera");
const captions = document.getElementById("captions");
const iframe = document.getElementById("video");

const lines = [
  "STARTED FROM NOTHING",
  "NOW IT FEELS CINEMATIC",
  "6 GOD ENERGY",
  "LEGACY IN MOTION",
  "EVERY FRAME HITS DIFFERENT"
];

let i = 0;

/* ===== ZOOM SYSTEM ===== */
function zoom(strong = false) {
  camera.style.transform = strong ? "scale(1.12)" : "scale(1.04)";
  setTimeout(() => {
    camera.style.transform = "scale(1)";
  }, 450);
}

/* ===== BEAT SYSTEM ===== */
function beat(strong = false) {
  flash.style.opacity = strong ? 0.35 : 0.15;

  document.body.classList.add("shake");

  captions.innerText = lines[i % lines.length];
  captions.style.opacity = 1;

  zoom(strong);

  i++;

  setTimeout(() => {
    flash.style.opacity = 0;
    document.body.classList.remove("shake");
    captions.style.opacity = 0;
  }, 220);
}

/* LOOP EFFECTS */
setInterval(() => beat(false), 900);
setInterval(() => beat(true), 2400);

/* CLICK BOOST */
document.addEventListener("click", () => beat(true));

/* ===== SONG SWITCH (NO API) ===== */
/* After ~35 seconds switch to "Not You Too" */

setTimeout(() => {
  iframe.src = "https://www.youtube.com/embed/7E7tVQp7lGk?autoplay=1";
  
  flash.style.opacity = 0.4;
  setTimeout(() => flash.style.opacity = 0, 200);

}, 35000);
