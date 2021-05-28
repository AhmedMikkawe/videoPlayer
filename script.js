var plyBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var frdBtn = document.getElementById("forward");
var bckBtn = document.getElementById("back");
var vol = document.getElementById("volume");
var vid = document.getElementById("video");
var speadBtn = document.getElementById("speed");
var slowBtn = document.getElementById("slow");
var mute = document.getElementById("mute");
plyBtn.addEventListener("click", function () {
  vid.play();
});
pauseBtn.addEventListener("click", function () {
  vid.pause();
});
frdBtn.addEventListener("click", function () {
  vid.currentTime += 2;
});
bckBtn.addEventListener("click", function () {
  vid.currentTime -= 2;
});
vol.addEventListener("change", function () {
  vid.volume = Number(vol.value) / 100;
});
speadBtn.addEventListener("click", function () {
  vid.playbackRate = 2;
});
slowBtn.addEventListener("click", function () {
  vid.playbackRate = 0.5;
});
mute.addEventListener("click", function () {
  vid.volume = 0;
  vol.value = 0;
});
