const LEAP_DIALOGS = {
  SirRowanLeap: true,
};

const LEAP_OPTIONS = {
  'Show me a soldier\'s leap.': true,
  'Again!': true,
};

function launchPlayer(player) {
  player.setMotionY(3.2);
}

export function dialog(e) {
  if (e.dialog && LEAP_DIALOGS[e.dialog.getName()]) {
    launchPlayer(e.player);
  }
}

export function dialogOption(e) {
  if (e.option && LEAP_OPTIONS[e.option.getName()]) {
    launchPlayer(e.player);
  }
}
