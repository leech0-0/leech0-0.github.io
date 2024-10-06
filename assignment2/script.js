const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
const skip30btn = document.querySelector("#skip-30s");
const rewind30btn = document.querySelector("back-30s");

// playPauseBtn.addEventListener("click", togglePlayPause);

video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

//skip 30 second button - Math.max ensures that the player will not go past 0 seconds
skip30btn.addEventListener("click", skip30sc);
function skip30sc() {
  video.currentTime = Math.max(0, video.currentTime + 30);
}

rewind30btn.addEventListener("click", rewind30sc());
function rewind30sc() {
  video.currentTime = Math.max(0, video.currentTime - 30);
}
