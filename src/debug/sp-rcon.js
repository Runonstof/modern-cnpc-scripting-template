import { API, dd } from '~/lib/dump';
import http from '~/lib/http';
import { Thread } from '~/lib/async';

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

const PORT = 25575;
const HOST = '127.0.0.1';
const BASE = 'http://' + HOST + ':' + PORT;
const SCRIPT_REL = 'scripts/ecmascript/debug/sp-rcon.js';
const CHAT_PREFIX = '§6§l[Debug] §r';

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

function hex(bytes) {
  const digits = '0123456789abcdef';
  let out = '';
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i] & 0xff;
    out += digits.charAt(b >> 4) + digits.charAt(b & 0xf);
  }
  return out;
}

function hashSpRcon() {
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

function runOnServerThread(player, fn) {
  const mc = player.getMCEntity().getServer();
  if (mc.isSameThread()) {
    return fn();
  }
  const box = { value: null, error: null };
  const latch = new CountDownLatch(1);
  mc.execute(function () {
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
    let fn;
    try {
      fn = new Function('player', 'world', 'API', 'dd', src);
    } catch (e) {
      fn = new Function('player', 'world', 'API', 'dd', 'return (' + src + ');');
    }
    return fn(player, world, API, debugDd);
  });
}

function probeExisting() {
  try {
    return JSON.parse(http.get(BASE + '/health'));
  } catch (e) {
    return null;
  }
}

function requestShutdown() {
  try {
    http.post(BASE + '/shutdown', { stop: true });
  } catch (e) {
    // old instance may already be gone
  }
  Thread.sleep(150);
}

function startServer(scriptHash) {
  const server = HttpServer.create(new InetSocketAddress(HOST, PORT), 0);

  function route(handler) {
    return new HandlerImpl({
      handle: function (exchange) {
        try {
          if (!isLocal(exchange)) {
            send(exchange, 403, { ok: false, error: 'localhost only' });
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
    route(function (exchange) {
      send(exchange, 200, { ok: true, hash: scriptHash, port: PORT });
    })
  );

  server.createContext(
    '/shutdown',
    route(function (exchange) {
      send(exchange, 200, { ok: true, stopping: true });
      const toStop = server;
      new Thread(function () {
        Thread.sleep(50);
        toStop.stop(0);
      }).start();
    })
  );

  server.createContext(
    '/cmd',
    route(function (exchange) {
      const cmd = parsePayload(exchange, ['cmd', 'command']);
      const result = executeCmd(cmd);
      send(exchange, 200, { ok: true, result: stringifyResult(result) });
    })
  );

  server.createContext(
    '/js',
    route(function (exchange) {
      const code = parsePayload(exchange, ['js', 'code', 'script']);
      const result = executeJs(code);
      send(exchange, 200, { ok: true, result: stringifyResult(result) });
    })
  );

  server.setExecutor(null);
  server.start();
  debugDd('sp-rcon listening on ' + BASE + ' (hash ' + scriptHash.substring(0, 8) + ')');
  return server;
}

export function init(e) {
  currentPlayer = e.player;
  const hash = hashSpRcon();
  const existing = probeExisting();

  if (existing && existing.hash === hash) {
    return;
  }

  if (existing) {
    debugDd('sp-rcon script changed, restarting listener');
    requestShutdown();
  }

  startServer(hash);
}

export function login(e) {
  currentPlayer = e.player;
}

export function tick(e) {
  currentPlayer = e.player;
}
