const flash = document.querySelector(".flash");
const camera = document.getElementById("camera");
const captions = document.getElementById("captions");
const iframe = document.getElementById("video");
const imgs = document.querySelectorAll(".images img");

const lines = [
  "STARTED FROM NOTHING",
  "NOW IT FEELS CINEMATIC",
  "6 GOD ENERGY",
  "LEGACY IN MOTION"
];

let i = 0;

/* ZOOM */
function zoom(strong=false){
  camera.style.transform = strong ? "scale(1.1)" : "scale(1.03)";
  setTimeout(()=>camera.style.transform="scale(1)",400);
}

/* BEAT */
function beat(strong=false){
  flash.style.opacity = strong ? 0.35 : 0.15;
  document.body.classList.add("shake");

  captions.innerText = lines[i % lines.length];
  captions.style.opacity = 1;

  zoom(strong);
  i++;

  setTimeout(()=>{
    flash.style.opacity = 0;
    document.body.classList.remove("shake");
    captions.style.opacity = 0;
  },200);
}

/* LOOP */
setInterval(()=>beat(false),900);
setInterval(()=>beat(true),2400);

/* CLICK BOOST */
document.addEventListener("click", ()=>beat(true));

/* IMAGE SYSTEM FIXED */
function spawnImage(){
  const img = imgs[Math.floor(Math.random()*imgs.length)];
  img.style.opacity = 1;
  img.style.left = Math.random()*70 + "%";
  img.style.top = Math.random()*70 + "%";

  setTimeout(()=>img.style.opacity = 0, 900);
}

setInterval(spawnImage, 1200);

/* SONG SWITCH FIXED */

/* 1. YouTube Short → 2. NOT YOU TOO */
setTimeout(()=>{
  iframe.src = "https://www.youtube.com/embed/7E7tVQp7lGk?autoplay=1";
  flash.style.opacity = 0.5;
  setTimeout(()=>flash.style.opacity=0,200);
},35000);
