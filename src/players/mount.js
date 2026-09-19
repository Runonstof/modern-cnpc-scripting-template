const W_KEYS = { 17: true, 87: true };

function keyName(player) {
  return 'mountW_' + player.getUUID();
}

export function keyPressed(e) {
  if (!W_KEYS[e.key]) {
    return;
  }
  e.player.getWorld().getTempdata().put(keyName(e.player), 1);
}

export function keyReleased(e) {
  if (!W_KEYS[e.key]) {
    return;
  }
  e.player.getWorld().getTempdata().put(keyName(e.player), 0);
}

export function tick(e) {
  const player = e.player;
  const temp = player.getWorld().getTempdata();
  const uuid = player.getUUID();
  temp.put('mountYaw_' + uuid, player.getRotation());
  temp.put('mountPitch_' + uuid, player.getPitch());
}
