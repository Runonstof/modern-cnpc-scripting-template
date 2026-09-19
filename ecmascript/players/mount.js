var W_KEYS = {
  17: true,
  87: true
};
function keyName(player) {
  return 'mountW_' + player.getUUID();
}
function keyPressed(e) {
  if (!W_KEYS[e.key]) {
    return;
  }
  e.player.getWorld().getTempdata().put(keyName(e.player), 1);
}
function keyReleased(e) {
  if (!W_KEYS[e.key]) {
    return;
  }
  e.player.getWorld().getTempdata().put(keyName(e.player), 0);
}
function tick(e) {
  var player = e.player;
  var temp = player.getWorld().getTempdata();
  var uuid = player.getUUID();
  temp.put('mountYaw_' + uuid, player.getRotation());
  temp.put('mountPitch_' + uuid, player.getPitch());
}

