import { API, dd } from '~/lib/dump';
import http from '~/lib/http';
import { Thread } from '~/lib/async';
import {
  npcAddScript,
  npcCreateScriptTab,
  npcGetNbt,
  npcGetScripts,
  npcGetScriptsArray,
  npcHasScript,
  npcIsScriptEnabled,
  npcRemoveScript,
  npcSetScriptEnabled,
} from '~/lib/npc-scripts';
import { getFieldNames, getMethodNames } from '~/lib/reflection';

export {
  npcAddScript,
  npcCreateScriptTab,
  npcGetNbt,
  npcGetScripts,
  npcGetScriptsArray,
  npcHasScript,
  npcIsScriptEnabled,
  npcRemoveScript,
  npcSetScriptEnabled,
  getFieldNames,
  getMethodNames,
};

const HttpServer = Java.type('com.sun.net.httpserver.HttpServer');
const HttpHandler = Java.type('com.sun.net.httpserver.HttpHandler');
const InetSocketAddress = Java.type('java.net.InetSocketAddress');
const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const MessageDigest = Java.type('java.security.MessageDigest');
const CountDownLatch = Java.type('java.util.concurrent.CountDownLatch');
const URLDecoder = Java.type('java.net.URLDecoder');
const InputStreamReader = Java.type('java.io.InputStreamReader');
const BufferedReader = Java.type('java.io.BufferedReader');
const StringWriter = Java.type('java.io.StringWriter');
const JString = Java.type('java.lang.String');

const DEFAULT_PORT = 25575;
const LOCAL_HOST = '127.0.0.1';
const SCRIPT_REL = 'scripts/ecmascript/debug/ai-integration.js';
const CHAT_PREFIX = '§6§l[Debug] §r';
const LOOK_DISTANCE = 5;
const PASSWORD_KEY = 'ai-integration-password';
const PORT_KEY = 'ai-integration-port';
const PASSWORD_HEADER = 'X-AI-Password';
const GUI_CONTROL = 25575;
const GUI_SETTINGS = 25576;
const ID_START = 1;
const ID_STOP = 2;
const ID_OPEN_SETTINGS = 3;
const ID_PASSWORD_FIELD = 1;
const ID_SAVE = 2;
const ID_CANCEL = 3;
const ID_PORT_FIELD = 4;
const GAMEMODE_CREATIVE = 1;

function debugDd(...args) {
  const prefixed = [];
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (!(arg instanceof Error) && typeof arg === 'object') {
      arg = JSON.stringify(arg, null, 2);
    }
    prefixed.push(CHAT_PREFIX + arg);
  }
  dd.apply(null, prefixed);
}

const HandlerImpl = Java.extend(HttpHandler);

let currentPlayer = null;
let listeningServer = null;
let boundPort = DEFAULT_PORT;

function hex(bytes) {
  const digits = '0123456789abcdef';
  let out = '';
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i] & 0xff;
    out += digits.charAt(b >> 4) + digits.charAt(b & 0xf);
  }
  return out;
}

function hashScript() {
  const file = new File(API.getLevelDir(), SCRIPT_REL);
  if (!file.exists()) {
    return 'missing';
  }
  const digest = MessageDigest.getInstance('SHA-256');
  return hex(digest.digest(Files.readAllBytes(file.toPath())));
}

function readStream(stream) {
  const reader = new BufferedReader(new InputStreamReader(stream, 'UTF-8'));
  const writer = new StringWriter();
  let line;
  while ((line = reader.readLine()) != null) {
    writer.write(line);
    writer.write('\n');
  }
  reader.close();
  return String(writer.toString());
}

function queryMap(exchange) {
  const raw = exchange.getRequestURI().getRawQuery();
  const map = {};
  if (!raw) {
    return map;
  }
  const parts = String(raw).split('&');
  for (let i = 0; i < parts.length; i++) {
    const idx = parts[i].indexOf('=');
    if (idx < 0) {
      map[URLDecoder.decode(parts[i], 'UTF-8')] = '';
    } else {
      map[URLDecoder.decode(parts[i].substring(0, idx), 'UTF-8')] =
        URLDecoder.decode(parts[i].substring(idx + 1), 'UTF-8');
    }
  }
  return map;
}

function parsePayload(exchange, keys) {
  const q = queryMap(exchange);
  for (let i = 0; i < keys.length; i++) {
    if (q[keys[i]] != null && q[keys[i]] !== '') {
      return q[keys[i]];
    }
  }
  const body = readStream(exchange.getRequestBody()).replace(/^\s+|\s+$/g, '');
  if (!body) {
    return '';
  }
  if (body.charAt(0) === '{' || body.charAt(0) === '[') {
    try {
      const json = JSON.parse(body);
      for (let i = 0; i < keys.length; i++) {
        if (json[keys[i]] != null) {
          return String(json[keys[i]]);
        }
      }
    } catch (e) {
      // treat as raw text
    }
  }
  return body;
}

function send(exchange, status, payload) {
  const text = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
  const bytes = new JString(text).getBytes('UTF-8');
  const headers = exchange.getResponseHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  exchange.sendResponseHeaders(status, bytes.length);
  const out = exchange.getResponseBody();
  out.write(bytes);
  out.close();
}

function isLocal(exchange) {
  try {
    return exchange.getRemoteAddress().getAddress().isLoopbackAddress();
  } catch (e) {
    return false;
  }
}

function getStoredPassword() {
  try {
    const value = API.getIWorld('minecraft:overworld').storeddata.get(PASSWORD_KEY);
    if (value == null) {
      return '';
    }
    return String(value);
  } catch (e) {
    return '';
  }
}

function setStoredPassword(value) {
  const stored = API.getIWorld('minecraft:overworld').storeddata;
  const trimmed = String(value == null ? '' : value).replace(/^\s+|\s+$/g, '');
  if (!trimmed) {
    stored.remove(PASSWORD_KEY);
    return '';
  }
  stored.put(PASSWORD_KEY, trimmed);
  return trimmed;
}

function requestPassword(exchange) {
  try {
    const header = exchange.getRequestHeaders().getFirst(PASSWORD_HEADER);
    return header == null ? '' : String(header);
  } catch (e) {
    return '';
  }
}

function authorize(exchange, pathname) {
  const local = isLocal(exchange);
  const expected = getStoredPassword();
  if (!expected) {
    if (local) {
      return true;
    }
    send(exchange, 403, { ok: false, error: 'remote access requires a password' });
    return false;
  }
  if (local && (pathname === '/health' || pathname === '/shutdown')) {
    return true;
  }
  if (requestPassword(exchange) === expected) {
    return true;
  }
  send(exchange, 401, { ok: false, error: 'invalid or missing ' + PASSWORD_HEADER + ' header' });
  return false;
}

function parsePort(value) {
  const n = parseInt(String(value == null ? '' : value).replace(/^\s+|\s+$/g, ''), 10);
  if (!(n >= 1 && n <= 65535)) {
    return 0;
  }
  return n;
}

function getStoredPort() {
  try {
    const parsed = parsePort(API.getIWorld('minecraft:overworld').storeddata.get(PORT_KEY));
    return parsed || DEFAULT_PORT;
  } catch (e) {
    return DEFAULT_PORT;
  }
}

function setStoredPort(value) {
  const stored = API.getIWorld('minecraft:overworld').storeddata;
  const parsed = parsePort(value);
  if (!parsed) {
    stored.remove(PORT_KEY);
    return DEFAULT_PORT;
  }
  stored.put(PORT_KEY, parsed);
  return parsed;
}

function localBase(port) {
  return 'http://' + LOCAL_HOST + ':' + (port || getStoredPort());
}

function bindHost() {
  return getStoredPassword() ? '0.0.0.0' : LOCAL_HOST;
}

function runOnServerThread(player, fn) {
  const mcEntity = player.getMCEntity();
  // m_20194_ = net.minecraft.world.entity.Entity#getServer
  const server = mcEntity.m_20194_();
  // m_18695_ = net.minecraft.util.thread.BlockableEventLoop#isSameThread
  if (server.m_18695_()) {
    return fn();
  }
  const box = { value: null, error: null };
  const latch = new CountDownLatch(1);
  server.execute(function () {
    try {
      box.value = fn();
    } catch (err) {
      box.error = err;
    } finally {
      latch.countDown();
    }
  });
  latch.await();
  if (box.error) {
    throw box.error;
  }
  return box.value;
}

function stringifyResult(value) {
  if (value === undefined) {
    return 'undefined';
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch (e) {
    return String(value);
  }
}

function resolvePlayer() {
  if (currentPlayer) {
    return currentPlayer;
  }
  const players = API.getIWorld('minecraft:overworld').getAllPlayers();
  if (players && players.length) {
    currentPlayer = players[0];
    return currentPlayer;
  }
  return null;
}

function resolveLookTarget(player) {
  const entities = player.rayTraceEntities(LOOK_DISTANCE, false, false);
  if (entities && entities.length) {
    return entities[0];
  }
  return null;
}

function resolveLookBlock(player) {
  const trace = player.rayTraceBlock(LOOK_DISTANCE, false, false);
  if (trace) {
    return trace.getBlock();
  }
  return null;
}

function executeCmd(raw) {
  const player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  let cmd = String(raw).replace(/^\s+|\s+$/g, '');
  if (!cmd) {
    throw new Error('Missing command');
  }
  if (cmd.charAt(0) === '/') {
    cmd = cmd.substring(1);
  }
  return runOnServerThread(player, function () {
    return API.executeCommand(player.getWorld(), cmd);
  });
}

function nbtCompoundList(nbt, key) {
  if (!nbt || !nbt.has(key)) {
    return [];
  }
  const list = nbt.getList(key, 10);
  if (!list) {
    return [];
  }
  return Java.from(list);
}

function readNpcLogs(uuid) {
  const player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  const id = String(uuid).replace(/^\s+|\s+$/g, '');
  if (!id) {
    throw new Error('Missing uuid');
  }
  return runOnServerThread(player, function () {
    const entity = player.getWorld().getEntity(id);
    if (!entity) {
      throw new Error('Entity not found: ' + id);
    }
    const nbt = npcGetNbt(entity);
    const scripts = nbtCompoundList(nbt, 'Scripts');
    const logs = [];
    for (let i = 0; i < scripts.length; i++) {
      const entries = nbtCompoundList(scripts[i], 'Console');
      for (let j = 0; j < entries.length; j++) {
        logs.push({
          tab: i,
          time: String(entries[j].getLong('Long')),
          message: entries[j].getString('String'),
        });
      }
    }
    return {
      uuid: entity.getUUID(),
      name: entity.getName(),
      logs: logs,
    };
  });
}

function executeJs(code) {
  const player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  const src = String(code);
  if (!src.replace(/^\s+|\s+$/g, '')) {
    throw new Error('Missing js');
  }
  return runOnServerThread(player, function () {
    const world = player.getWorld();
    const storeddata = world.storeddata;
    const tempdata = world.tempdata;
    const target = resolveLookTarget(player);
    const block = resolveLookBlock(player);
    const fn = new Function(
      'player',
      'world',
      'API',
      'dd',
      'storeddata',
      'tempdata',
      'target',
      'block',
      'return (' + src + ');'
    );
    return fn(player, world, API, debugDd, storeddata, tempdata, target, block);
  });
}

function probeExisting(port) {
  try {
    return JSON.parse(http.get(localBase(port) + '/health'));
  } catch (e) {
    return null;
  }
}

function requestShutdown(port) {
  try {
    http.post(localBase(port) + '/shutdown', { stop: true });
  } catch (e) {
    // old instance may already be gone
  }
  Thread.sleep(150);
}

function isListening() {
  if (listeningServer) {
    return true;
  }
  const existing = probeExisting(boundPort) || probeExisting(getStoredPort());
  return !!(existing && existing.ok);
}

function stopListeningServer(clearPlayer) {
  const local = listeningServer;
  listeningServer = null;
  if (clearPlayer) {
    currentPlayer = null;
  }
  if (local) {
    try {
      local.stop(0);
    } catch (e) {
      // already stopped
    }
    return;
  }
  requestShutdown(boundPort);
}

function ensureServer() {
  const hash = hashScript();
  const port = getStoredPort();
  const existing = probeExisting(port) || probeExisting(boundPort);
  if (existing && existing.hash === hash && existing.port === port) {
    return;
  }
  if (existing) {
    debugDd('ai-integration script changed, restarting listener');
    requestShutdown(existing.port || boundPort);
  }
  listeningServer = startServer(hash);
}

function restartListeningServer() {
  const local = listeningServer;
  listeningServer = null;
  if (local) {
    try {
      local.stop(0);
    } catch (e) {
      // already stopped
    }
  } else {
    requestShutdown(boundPort);
    Thread.sleep(150);
  }
  listeningServer = startServer(hashScript());
}

function openControlGui(player) {
  const running = isListening();
  const gui = API.createCustomGui(GUI_CONTROL, 240, 90, false, player);
  gui.setDoesPauseGame(false);
  gui.addLabel(0, running ? 'AI integration: running' : 'AI integration: stopped', 10, 10, 220, 12, 0xffffff);
  const startBtn = gui.addButton(ID_START, 'Start', 10, 36, 68, 20);
  startBtn.setEnabled(!running);
  const stopBtn = gui.addButton(ID_STOP, 'Stop', 86, 36, 68, 20);
  stopBtn.setEnabled(running);
  gui.addButton(ID_OPEN_SETTINGS, 'Settings', 162, 36, 68, 20);
  player.showCustomGui(gui);
}

function openSettingsGui(player) {
  const gui = API.createCustomGui(GUI_SETTINGS, 240, 128, false, player);
  gui.setDoesPauseGame(false);
  gui.addLabel(0, 'Password', 10, 8, 220, 12, 0xffffff);
  const password = gui.addTextArea(ID_PASSWORD_FIELD, 10, 20, 220, 18);
  password.setText(getStoredPassword());
  gui.addLabel(5, 'Port', 10, 44, 220, 12, 0xffffff);
  const port = gui.addTextArea(ID_PORT_FIELD, 10, 56, 220, 18);
  port.setText(String(getStoredPort()));
  password.setFocused(true);
  gui.addButton(ID_SAVE, 'Save', 10, 84, 100, 20);
  gui.addButton(ID_CANCEL, 'Cancel', 130, 84, 100, 20);
  player.showCustomGui(gui);
}

function startServer(scriptHash) {
  const host = bindHost();
  const port = getStoredPort();
  boundPort = port;
  const server = HttpServer.create(new InetSocketAddress(host, port), 0);

  function route(pathname, handler) {
    return new HandlerImpl({
      handle: function (exchange) {
        try {
          if (!authorize(exchange, pathname)) {
            return;
          }
          handler(exchange);
        } catch (err) {
          const message = err && err.message ? err.message : String(err);
          const stack = err && err.stack ? err.stack : '';
          try {
            send(exchange, 500, { ok: false, error: message, stack: stack });
          } catch (e2) {
            // ignore
          }
        } finally {
          try {
            exchange.close();
          } catch (e3) {
            // ignore
          }
        }
      },
    });
  }

  server.createContext(
    '/health',
    route('/health', function (exchange) {
      send(exchange, 200, {
        ok: true,
        hash: scriptHash,
        port: port,
        bind: host,
        password: !!getStoredPassword(),
      });
    })
  );

  server.createContext(
    '/shutdown',
    route('/shutdown', function (exchange) {
      send(exchange, 200, { ok: true, stopping: true });
      const toStop = server;
      new Thread(function () {
        Thread.sleep(50);
        if (listeningServer === toStop) {
          listeningServer = null;
        }
        toStop.stop(0);
      }).start();
    })
  );

  server.createContext(
    '/cmd',
    route('/cmd', function (exchange) {
      const cmd = parsePayload(exchange, ['cmd', 'command']);
      const result = executeCmd(cmd);
      send(exchange, 200, { ok: true, result: stringifyResult(result) });
    })
  );

  server.createContext(
    '/reload',
    route('/reload', function (exchange) {
      const note = parsePayload(exchange, ['note', 'message', 'reason', 'text']);
      debugDd('Reload CustomNPC scripts');
      if (note) {
        debugDd(note);
      }
      send(exchange, 200, { ok: true, reloading: true, note: note || '' });
      new Thread(function () {
        Thread.sleep(50);
        try {
          executeCmd('noppes script reload');
        } catch (err) {
          debugDd('reload failed: ' + (err && err.message ? err.message : String(err)));
        }
      }).start();
    })
  );

  server.createContext(
    '/js',
    route('/js', function (exchange) {
      const code = parsePayload(exchange, ['js', 'code', 'script']);
      const result = executeJs(code);
      send(exchange, 200, { ok: true, result: stringifyResult(result) });
    })
  );

  server.createContext(
    '/npclogs/read',
    route('/npclogs/read', function (exchange) {
      const uuid = parsePayload(exchange, ['uuid', 'entity', 'id']);
      const result = readNpcLogs(uuid);
      send(exchange, 200, { ok: true, uuid: result.uuid, name: result.name, logs: result.logs });
    })
  );

  server.setExecutor(null);
  server.start();
  debugDd(
    'ai-integration listening on ' +
      host +
      ':' +
      port +
      ' (hash ' +
      scriptHash.substring(0, 8) +
      (getStoredPassword() ? ', password on' : '') +
      ')'
  );
  return server;
}

export function init(e) {
  currentPlayer = e.player;
  ensureServer();
}

export function login(e) {
  currentPlayer = e.player;
  ensureServer();
}

export function logout() {
  stopListeningServer(true);
}

export function tick(e) {
  currentPlayer = e.player;
}

export function chat(e) {
  const msg = String(e.message || '').replace(/^\s+|\s+$/g, '');
  if (msg !== '!ai-integration') {
    return;
  }
  try {
    e.setCanceled(true);
  } catch (err) {
    // chat may not be cancellable
  }
  if (e.player.getGamemode() !== GAMEMODE_CREATIVE) {
    return;
  }
  openControlGui(e.player);
}

export function customGuiButton(e) {
  if (!e.gui) {
    return;
  }
  const guiId = e.gui.getID();
  if (guiId === GUI_CONTROL) {
    if (e.buttonId === ID_START) {
      if (!isListening()) {
        ensureServer();
        debugDd('ai-integration started');
      }
      openControlGui(e.player);
      return;
    }
    if (e.buttonId === ID_STOP) {
      if (isListening()) {
        stopListeningServer(false);
        debugDd('ai-integration stopped');
      }
      openControlGui(e.player);
      return;
    }
    if (e.buttonId === ID_OPEN_SETTINGS) {
      openSettingsGui(e.player);
    }
    return;
  }
  if (guiId !== GUI_SETTINGS) {
    return;
  }
  if (e.buttonId === ID_CANCEL) {
    openControlGui(e.player);
    return;
  }
  if (e.buttonId !== ID_SAVE) {
    return;
  }
  const passwordField = e.gui.getComponent(ID_PASSWORD_FIELD);
  const portField = e.gui.getComponent(ID_PORT_FIELD);
  const password = passwordField && passwordField.getText ? passwordField.getText() : '';
  const portText = portField && portField.getText ? portField.getText() : '';
  const saved = setStoredPassword(password);
  const port = parsePort(portText) ? setStoredPort(portText) : setStoredPort(DEFAULT_PORT);
  if (!parsePort(portText)) {
    debugDd('invalid port, using ' + DEFAULT_PORT);
  }
  if (isListening()) {
    restartListeningServer();
  }
  debugDd(
    (saved ? 'password saved' : 'password cleared') + ', port ' + port
  );
  openControlGui(e.player);
}
