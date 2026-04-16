const flash = document.querySelector(".flash");
const aura = document.getElementById("aura");
const captions = document.getElementById("captions");
const camera = document.getElementById("camera");
const images = document.querySelectorAll(".drake-img");
const highway = document.getElementById("highway");

/* ===== HIGHWAY LIGHTS ===== */
for (let i = 0; i < 25; i++) {
  let light = document.createElement("div");
  light.className = "light";
  light.style.left = Math.random() * 100 + "%";
  light.style.animationDuration = (Math.random() * 2 + 1) + "s";
  highway.appendChild(light);
}

/* ===== CAPTIONS ===== */
const lines = [
  "STARTED FROM NOTHING",
  "NOW THE WORLD WATCHES",
  "6 GOD ENERGY",
  "LEGACY IN MOTION",
  "EVERY BEAT HITS DIFFERENT"
];

let i = 0;

/* ===== CINEMATIC ZOOM ===== */
function zoom(strong = false) {
  camera.style.transform = strong ? "scale(1.08)" : "scale(1.03)";
  camera.style.filter = strong ? "brightness(1.2)" : "brightness(1.05)";

  setTimeout(() => {
    camera.style.transform = "scale(1)";
    camera.style.filter = "none";
  }, 250);
}

/* ===== MAIN BEAT ===== */
function beat(strong = false) {
  flash.style.opacity = strong ? 0.4 : 0.2;

  document.body.classList.add("shake");

  aura.style.opacity = strong ? 1 : 0.4;

  captions.innerText = lines[i % lines.length];
  captions.style.opacity = 1;

  zoom(strong);

  i++;

  setTimeout(() => {
    flash.style.opacity = 0;
    document.body.classList.remove("shake");
    aura.style.opacity = 0;
    captions.style.opacity = 0;
  }, 200);
}

/* ===== IMAGE DROPS ===== */
function imageDrop() {
  let img = images[Math.floor(Math.random() * images.length)];
  img.style.opacity = 1;
  img.style.left = Math.random() * 70 + "%";
  img.style.top = Math.random() * 70 + "%";

  setTimeout(() => {
    img.style.opacity = 0;
  }, 900);
}

/* ===== LOOPS ===== */
setInterval(() => beat(false), 800);
setInterval(() => beat(true), 2400);
setInterval(imageDrop, 1300);

/* ===== INTERACTION ===== */
document.addEventListener("click", () => beat(true));
