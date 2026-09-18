var LEAP_DIALOGS = {
  SirRowanLeap: true
};
var LEAP_OPTIONS = {
  'Show me a soldier\'s leap.': true,
  'Again!': true
};
function launchPlayer(player) {
  player.setMotionY(3.2);
}
function dialog(e) {
  if (e.dialog && LEAP_DIALOGS[e.dialog.getName()]) {
    launchPlayer(e.player);
  }
}
function dialogOption(e) {
  if (e.option && LEAP_OPTIONS[e.option.getName()]) {
    launchPlayer(e.player);
  }
}

