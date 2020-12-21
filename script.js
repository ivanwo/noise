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
  white.play();
  setTimeout((_) => {
    if (playing) {
      white2.volume = white.volume;
      white2.play();
    }
  }, 10000);
  fade = setInterval( _ => {white.volume+=0.01}, 20)
  setTimeout((_) => 
    {
      clearInterval(fade);
    }, 1500);
  
}
function fadeOut(){
  //
  white.pause();
  white2.pause();
}
function volumeDown(){
  white2.volume = white.volume;
  if(white.volume > 0.05){
    white.volume -= 0.05;
    white2.volume -= 0.05;
  }
}
function volumeUp(){
  white2.volume = white.volume;
  if(white.volume < 0.96){
    white.volume +=0.05;
    white2.volume +=0.05;
  }
}