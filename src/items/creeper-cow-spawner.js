import { spawnCreeperCow } from '~/lib/creeper-cow';

function cancelUse(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}

function spawnPos(e) {
  if (e.type === 2 && e.target) {
    return {
      x: e.target.getX() + 0.5,
      y: e.target.getY() + 1,
      z: e.target.getZ() + 0.5,
    };
  }
  const player = e.player;
  const yaw = (player.getRotation() * Math.PI) / 180;
  return {
    x: player.getX() - Math.sin(yaw) * 2,
    y: player.getY(),
    z: player.getZ() + Math.cos(yaw) * 2,
  };
}

export function interact(e) {
  cancelUse(e);
  if (e.type === 1) {
    return;
  }

  const data = e.item.getTempdata();
  const now = e.player.getWorld().getTotalTime();
  if (data.get('spawnTick') === now) {
    return;
  }
  data.put('spawnTick', now);

  const pos = spawnPos(e);
  spawnCreeperCow(e.player.getWorld(), pos.x, pos.y, pos.z);
}
