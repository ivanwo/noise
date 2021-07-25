let playing = false;
let white = new Audio("noise.wav");
white.loop = true;
let white2 = new Audio("noise.wav");
white2.loop = true;
let fade;

function toggleNoise() {
  if (playing) {
    fadeOut();
    document.getElementById("noise-toggle").innerText = "play_circle";
    playing = false;
  } else {
    fadeIn();
    document.getElementById("noise-toggle").innerText = "pause_circle";
    playing = true;
  }
}
function fadeIn(){
  //
  white.volume = 0;
  let sliderObject = document.getElementById('slider');
  let valueObject = document.getElementById("value");
  white.play();
  setTimeout((_) => {
    if (playing) {
      white2.volume = white.volume;
      white2.play();
    }
  }, 10000);
  fade = setInterval( _ => {white.volume+=0.01; sliderObject.value = white.volume*100; valueObject.innerText = Math.round(white.volume*100)}, 20)
  setTimeout((_) => 
    {
      clearInterval(fade);
    }, 1500);
  
}
function fadeOut(){
  // TODO: fix fade out later
  white.pause();
  white2.pause();
}
function volumeDown(){
  white2.volume = white.volume;
  let valueObject = document.getElementById("value");
  let sliderObject = document.getElementById('slider');
  if(white.volume > 0.05){
    white.volume -= 0.05;
    white2.volume -= 0.05;
    sliderObject.value = white.volume*100; 
    valueObject.innerText = Math.round(white.volume*100);
  }
}
function volumeUp(){
  white2.volume = white.volume;
  let valueObject = document.getElementById("value");
  let sliderObject = document.getElementById('slider');
  if(white.volume < 0.96){
    white.volume +=0.05;
    white2.volume +=0.05;
    sliderObject.value = white.volume*100; 
    valueObject.innerText = Math.round(white.volume*100);
  }
}
let adjustAudio = _ => {
  let valueObject = document.getElementById("value");
  let sliderObject = document.getElementById('slider');
  let newVolume  = Number.parseInt(sliderObject.value);
  valueObject.innerText = newVolume;
  if(playing){
    white.volume = newVolume/100;
    white2.volume = newVolume/100;
  }
}