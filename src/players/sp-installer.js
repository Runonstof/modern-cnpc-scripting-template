// ==UserScript==
// @name               ScriptManager SP Installer
// @version            1.0.0
// @description        Downloads Script Manager from a player or NPC script
// @author             Runonstof
// @license            MIT
// @minecraft          1.20.1
// @match              https://customnpcs.com
// @scripttype         player
// @category           Utility
// ==/UserScript==

const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
const JString = Java.type('java.lang.String');
const URL = Java.type('java.net.URL');
const BufferedReader = Java.type('java.io.BufferedReader');
const InputStreamReader = Java.type('java.io.InputStreamReader');

const SCRIPT_ID = 548277;
const SCRIPT_PATH = 'players/script-manager.js';
const DOWNLOAD_URL = 'https://update.greasyfork.org/scripts/' + SCRIPT_ID + '/script.user.js';
const PREFIX = '§e§l[ScriptManager] §r';
const HINT_KEY = 'sp_installer_show_hint';

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
  const parent = file.getParentFile();
  if (parent && !parent.exists()) {
    parent.mkdirs();
  }
  Files.write(file.toPath(), new JString(String(contents)).getBytes(StandardCharsets.UTF_8));
}

function download(url) {
  const connection = new URL(url).openConnection();
  connection.setRequestMethod('GET');
  connection.setDoOutput(false);
  const reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), 'UTF-8'));
  let response = '';
  let line;
  while ((line = reader.readLine()) != null) {
    response += line + '\n';
  }
  reader.close();
  const code = connection.getResponseCode();
  connection.disconnect();
  if (!(code >= 200 && code < 400)) {
    throw new Error('Download failed: ' + code);
  }
  return response;
}

function attachPlayerScript(relativePath) {
  const file = playerScriptsFile();
  const tab =
    '        {\n' +
    '            "Script": "",\n' +
    '            "Console": [\n' +
    '            ],\n' +
    '            "ScriptList": [\n' +
    '                {\n' +
    '                    "Line": "' +
    relativePath +
    '"\n' +
    '                }\n' +
    '            ]\n' +
    '        }';
  if (!file.exists()) {
    writeText(
      file,
      '{\n' +
        '    "ScriptEnabled": 1b,\n' +
        '    "ScriptConsole": [\n' +
        '    ],\n' +
        '    "Scripts": [\n' +
        tab +
        '\n    ],\n' +
        '    "ScriptLanguage": "ECMAScript"\n' +
        '}\n'
    );
    return true;
  }
  let text = String(readText(file));
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
  const marker = '\n    ],\n    "ScriptLanguage"';
  if (text.indexOf(marker) !== -1) {
    writeText(file, text.replace(marker, ',\n' + tab + marker));
    return true;
  }
  throw new Error('Could not update player_scripts.json');
}

function alreadyReady() {
  return scriptFile().exists() && String(readText(playerScriptsFile())).indexOf(SCRIPT_PATH) !== -1;
}

function tell(message) {
  API.getIWorld('minecraft:overworld').broadcast(PREFIX + message);
}

function tellOpenHint() {
  tell('In creative, type §b§l!scripts§r to open Script Manager.');
}

function tellNpcHint(e) {
  if (e && e.npc) {
    tell('You can delete the NPC now');
  }
}

function worldData() {
  return API.getIWorld('minecraft:overworld').tempdata;
}

export function init(e) {
  const tempdata = worldData();
  if (alreadyReady()) {
    if (tempdata.has(HINT_KEY)) {
      tempdata.remove(HINT_KEY);
      tellOpenHint();
      tellNpcHint(e);
    }
    return;
  }
  try {
    writeText(scriptFile(), download(DOWNLOAD_URL));
    attachPlayerScript(SCRIPT_PATH);
    tell('Installed. Reloading player scripts...');
    tellOpenHint();
    tellNpcHint(e);
    tempdata.put(HINT_KEY, true);
    API.executeCommand(API.getIWorld('minecraft:overworld'), 'noppes script reload');
  } catch (err) {
    tell('§cInstall failed: ' + err);
  }
}
