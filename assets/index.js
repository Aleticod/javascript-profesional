import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const buttonPlay = document.getElementById("played");
const buttonMute = document.getElementById("muted");

const player = new MediaPlayer({el: video, plugins: [
  new AutoPlay(), new AutoPause()
]})

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = function() {
  player.toggleMute();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  });
}