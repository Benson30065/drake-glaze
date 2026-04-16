const flash = document.querySelector(".flash");
const camera = document.getElementById("camera");
const captions = document.getElementById("captions");
const images = document.querySelectorAll(".drake-img");
const highway = document.getElementById("highway");

/* HIGHWAY LIGHTS */
for (let i = 0; i < 25; i++) {
  let light = document.createElement("div");
  light.className = "light";
  light.style.left = Math.random() * 100 + "%";
  light.style.animationDuration = (Math.random() * 2 + 1) + "s";
  highway.appendChild(light);
}

/* LINES */
const lines = [
  "STARTED FROM NOTHING",
  "NOW IT FEELS CINEMATIC",
  "6 GOD ENERGY",
  "LEGACY IN MOTION",
  "EVERY FRAME HITS DIFFERENT"
];

let i = 0;

/* CINEMATIC ZOOM ENGINE */
function zoom(strong = false) {
  if (strong) {
    camera.style.transform = "scale(1.12)";
  } else {
    camera.style.transform = "scale(1.04)";
  }

  setTimeout(() => {
    camera.style.transform = "scale(1)";
  }, 500);
}

/* IMAGE DROP */
function imageDrop() {
  let img = images[Math.floor(Math.random() * images.length)];
  img.style.opacity = 1;
  img.style.left = Math.random() * 70 + "%";
  img.style.top = Math.random() * 70 + "%";

  setTimeout(() => {
    img.style.opacity = 0;
  }, 900);
}

/* MAIN BEAT */
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
  }, 200);
}

/* LOOPS */
setInterval(() => beat(false), 900);
setInterval(() => beat(true), 2600);
setInterval(imageDrop, 1200);

/* CLICK BOOST */
document.addEventListener("click", () => beat(true));
