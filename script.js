const flash = document.querySelector(".flash");
const video = document.getElementById("video");

/* Simulated beat sync */
function beatFlash() {
  flash.style.opacity = 0.25;

  setTimeout(() => {
    flash.style.opacity = 0;
  }, 100);
}

/* Fake beat pattern (edit-style timing) */
setInterval(beatFlash, 600); // adjust for faster/slower beats

/* Random glitch spikes */
function glitchSpike() {
  video.classList.add("glitch");

  setTimeout(() => {
    video.classList.remove("glitch");
  }, 120);
}

/* Random glitch timing */
setInterval(glitchSpike, Math.random() * 2000 + 1000);

/* Mouse interaction = strong glitch */
document.addEventListener("mousemove", () => {
  video.style.transform = `
    translate(${Math.random()*6-3}px, ${Math.random()*6-3}px)
  `;
});

/* Click = BIG edit hit */
document.addEventListener("click", () => {
  flash.style.opacity = 0.6;
  glitchSpike();

  setTimeout(() => {
    flash.style.opacity = 0;
  }, 150);
});
