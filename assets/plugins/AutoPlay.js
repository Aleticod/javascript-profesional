function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  // player.mute();
  if(!player.muted) {
    player.muted = true;
  }
  player.play();
}

export default AutoPlay;