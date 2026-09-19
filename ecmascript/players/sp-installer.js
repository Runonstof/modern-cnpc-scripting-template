// ==UserScript==
// @name               ScriptManager SP Installer
// @version            1.0.0
// @description        One-shot player script that downloads Script Manager and enables it
// @author             Runonstof
// @license            MIT
// @minecraft          1.20.1
// @match              https://customnpcs.com
// @scripttype         player
// @category           Utility
// ==/UserScript==

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var File = Java.type('java.io.File');
var Files = Java.type('java.nio.file.Files');
var StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
var JString = Java.type('java.lang.String');
var URL = Java.type('java.net.URL');
var BufferedReader = Java.type('java.io.BufferedReader');
var InputStreamReader = Java.type('java.io.InputStreamReader');
var SCRIPT_ID = 548277;
var SCRIPT_PATH = 'players/script-manager.js';
var DOWNLOAD_URL = 'https://update.greasyfork.org/scripts/' + SCRIPT_ID + '/script.user.js';
var PREFIX = '§e§l[ScriptManager] §r';
function scriptsRoot() {
  return new File(API.getLevelDir(), 'scripts');
}
function scriptFile() {
  return new File(new File(scriptsRoot(), 'ecmascript'), SCRIPT_PATH);
}
function playerScriptsFile() {
  return new File(scriptsRoot(), 'player_scripts.json');
}
function readText(file) {
  if (!file.exists()) {
    return '';
  }
  return new JString(Files.readAllBytes(file.toPath()), StandardCharsets.UTF_8);
}
function writeText(file, contents) {
  var parent = file.getParentFile();
  if (parent && !parent.exists()) {
    parent.mkdirs();
  }
  Files.write(file.toPath(), new JString(String(contents)).getBytes(StandardCharsets.UTF_8));
}
function download(url) {
  var connection = new URL(url).openConnection();
  connection.setRequestMethod('GET');
  connection.setDoOutput(false);
  var reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), 'UTF-8'));
  var response = '';
  var line;
  while ((line = reader.readLine()) != null) {
    response += line + '\n';
  }
  reader.close();
  var code = connection.getResponseCode();
  connection.disconnect();
  if (!(code >= 200 && code < 400)) {
    throw new Error('Download failed: ' + code);
  }
  return response;
}
function attachPlayerScript(relativePath) {
  var file = playerScriptsFile();
  var tab = '        {\n' + '            "Script": "",\n' + '            "Console": [\n' + '            ],\n' + '            "ScriptList": [\n' + '                {\n' + '                    "Line": "' + relativePath + '"\n' + '                }\n' + '            ]\n' + '        }';
  if (!file.exists()) {
    writeText(file, '{\n' + '    "ScriptEnabled": 1b,\n' + '    "ScriptConsole": [\n' + '    ],\n' + '    "Scripts": [\n' + tab + '\n    ],\n' + '    "ScriptLanguage": "ECMAScript"\n' + '}\n');
    return true;
  }
  var text = String(readText(file));
  if (text.indexOf(relativePath) !== -1) {
    return false;
  }
  if (text.indexOf('"ScriptEnabled"') !== -1) {
    text = text.replace(/"ScriptEnabled":\s*0b/, '"ScriptEnabled": 1b');
  }
  if (/"Scripts":\s*\[\s*\]/.test(text)) {
    text = text.replace(/"Scripts":\s*\[\s*\]/, '"Scripts": [\n' + tab + '\n    ]');
    writeText(file, text);
    return true;
  }
  var marker = '\n    ],\n    "ScriptLanguage"';
  if (text.indexOf(marker) !== -1) {
    writeText(file, text.replace(marker, ',\n' + tab + marker));
    return true;
  }
  throw new Error('Could not update player_scripts.json');
}
function alreadyReady() {
  return scriptFile().exists() && String(readText(playerScriptsFile())).indexOf(SCRIPT_PATH) !== -1;
}
function tell(player, message) {
  if (player && player.message) {
    player.message(PREFIX + message);
  }
}
var HINT_KEY = 'sp_installer_show_hint';
function tellOpenHint(player) {
  tell(player, 'In creative, type §b§l!scripts§r to open Script Manager.');
}
function worldData() {
  return API.getIWorld('minecraft:overworld').tempdata;
}
function init(e) {
  var tempdata = worldData();
  if (alreadyReady()) {
    if (tempdata.has(HINT_KEY)) {
      tempdata.remove(HINT_KEY);
      tellOpenHint(e.player);
    }
    return;
  }
  try {
    writeText(scriptFile(), download(DOWNLOAD_URL));
    attachPlayerScript(SCRIPT_PATH);
    tell(e.player, 'Installed. Reloading player scripts...');
    tellOpenHint(e.player);
    tempdata.put(HINT_KEY, true);
    API.executeCommand(API.getIWorld('minecraft:overworld'), 'noppes script reload');
  } catch (err) {
    tell(e.player, '§cInstall failed: ' + err);
  }
}

