/* ELEMENTS */
const flash = document.querySelector(".flash");
const video = document.getElementById("video");
const aura = document.getElementById("aura");
const captions = document.getElementById("captions");
const highway = document.getElementById("highway");
const images = document.querySelectorAll(".drake-img");

/* =========================
   HIGHWAY LIGHTS GENERATOR
========================= */
for (let i = 0; i < 20; i++) {
  let light = document.createElement("div");
  light.className = "light";
  light.style.left = Math.random() * 100 + "%";
  light.style.animationDuration = (Math.random() * 2 + 1) + "s";
  highway.appendChild(light);
}

/* =========================
   BEAT FLASH
========================= */
function beatFlash() {
  flash.style.opacity = 0.25;

  setTimeout(() => {
    flash.style.opacity = 0;
  }, 100);
}

/* =========================
   SHAKE + AURA (VELOCITY)
========================= */
function beatHit(strong = false) {
  document.body.classList.add("shake");

  aura.style.opacity = strong ? 1 : 0.4;
  aura.style.transform = strong ? "scale(1.3)" : "scale(1.1)";

  setTimeout(() => {
    document.body.classList.remove("shake");
    aura.style.opacity = 0;
    aura.style.transform = "scale(1)";
  }, 200);
}

/* =========================
   RANDOM IMAGE SLIDES
========================= */
function triggerImages() {
  images.forEach(img => {
    img.className = "drake-img";
  });

  let randomImg = images[Math.floor(Math.random() * images.length)];

  const animations = ["slide-left", "slide-right", "slide-top", "slide-bottom"];
  let randomAnim = animations[Math.floor(Math.random() * animations.length)];

  randomImg.classList.add(randomAnim);
}

/* =========================
   AUTO CAPTIONS (EDIT STYLE)
========================= */
const lines = [
  "STARTED FROM NOTHING",
  "NOW THE WORLD WATCHES",
  "EVERY MOVE HITS DIFFERENT",
  "LEGACY IN MOTION",
  "6 GOD ENERGY",
  "RUN IT BACK",
  "FEEL THE ENERGY"
];

let i = 0;

function showCaption() {
  captions.innerText = lines[i % lines.length];
  captions.style.opacity = 1;

  setTimeout(() => {
    captions.style.opacity = 0;
  }, 400);

  i++;
}

/* =========================
   TIMING SYSTEM (EDIT FLOW)
========================= */

/* Regular beats */
setInterval(() => {
  beatFlash();
  beatHit(false);
  showCaption();
}, 800);

/* Drop hits (strong effects) */
setInterval(() => {
  beatHit(true);
  triggerImages();
}, 2400);

/* =========================
   USER INTERACTION
========================= */

/* Click = BIG beat drop */
document.addEventListener("click", () => {
  beatFlash();
  beatHit(true);
  triggerImages();
});

/* Mouse movement = glitch movement */
document.addEventListener("mousemove", () => {
  video.style.transform = `
    translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)
  `;
});

/* Hover = aura pulse */
document.addEventListener("mouseenter", () => {
  aura.style.opacity = 0.3;
});
