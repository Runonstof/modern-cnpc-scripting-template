function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var world = API.getIWorld('minecraft:overworld');
function dd() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    if (!(arg instanceof Error) && _typeof(arg) === 'object') {
      arg = JSON.stringify(arg, null, 2);
    }
    world.broadcast(arg);
  }
}

var URL = Java.type("java.net.URL");
var OutputStreamWriter = Java.type("java.io.OutputStreamWriter");
var BufferedReader$1 = Java.type("java.io.BufferedReader");
var InputStreamReader$1 = Java.type("java.io.InputStreamReader");
// Custom error class
var HttpError = /*#__PURE__*/function (_Error) {
  function HttpError(response, responseCode) {
    var _this;
    _classCallCheck(this, HttpError);
    _this = _callSuper(this, HttpError, ["HttpError: ".concat(responseCode)]);
    _this.response = response;
    return _this;
  }
  _inherits(HttpError, _Error);
  return _createClass(HttpError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
function request(method, url) {
  var requestBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  url = new URL(url);
  var connection = url.openConnection();
  connection.setRequestMethod(method);
  if (method === "POST") {
    connection.setRequestProperty("Content-Type", "application/json");
    connection.setDoOutput(true);
    if (requestBody) {
      var writer = new OutputStreamWriter(connection.getOutputStream(), "UTF-8");
      writer.write(JSON.stringify(requestBody));
      writer.flush();
      writer.close();
    }
  } else {
    connection.setDoOutput(false);
  }
  var responseCode = connection.getResponseCode();
  var reader = new BufferedReader$1(new InputStreamReader$1(connection.getInputStream()));
  var response = "";
  var line;
  while ((line = reader.readLine()) != null) {
    response += line + '\n';
  }
  reader.close();
  if (!(responseCode >= 200 && responseCode < 400)) {
    throw new HttpError(response, responseCode);
  }
  connection.disconnect();
  return response;
}
function get(url) {
  return request("GET", url, null);
}
function post(url, requestBody) {
  return request("POST", url, requestBody);
}
function getJson(url) {
  return JSON.parse(get(url));
}
function postJson(url, requestBody) {
  return JSON.parse(post(url, requestBody));
}
var http = {
  get: get,
  post: post,
  getJson: getJson,
  postJson: postJson,
  request: request,
  HttpError: HttpError
};

var Thread = Java.type('java.lang.Thread');

var INbt = Java.type('noppes.npcs.api.INbt');
var ICustomNpc = Java.type('noppes.npcs.api.entity.ICustomNpc');
var NBT_COMPOUND = 10;
function escapeNbtString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function toJsArray(list) {
  if (!list) {
    return [];
  }
  return Java.from(list);
}
function applyNpcNbt(npcOrNbt, nbt) {
  if (npcOrNbt instanceof ICustomNpc) {
    npcOrNbt.setEntityNbt(nbt);
  }
}
/**
 * Resolve entity NBT. Accepts ICustomNpc or INbt so callers can reuse one NBT
 * for several edits. Throws if given a non-CustomNPC entity (e.g. /js `target`).
 */
function npcGetNbt(npcOrNbt) {
  if (npcOrNbt instanceof INbt) {
    return npcOrNbt;
  }
  if (!(npcOrNbt instanceof ICustomNpc)) {
    throw new Error('Target is not a CustomNPC');
  }
  return npcOrNbt.getEntityNbt();
}
function npcCreateScriptTab() {
  return API.stringToNbt('{Script:"",Console:[],ScriptList:[]}');
}
/**
 * Adds a script to the last existing tab, or creates a tab if none exist.
 * Does not fire init; call npc.reset() afterwards if needed.
 * scriptFile is the ECMAScript path as in the GUI, e.g. `npcs/vaelith.js`.
 */
function npcAddScript(npc, scriptFile) {
  var npcnbt = npcGetNbt(npc);
  var scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  if (!scripts.length) {
    scripts.push(npcCreateScriptTab());
  }
  var scriptNbt = scripts[scripts.length - 1];
  var scriptFiles = toJsArray(scriptNbt.getList('ScriptList', NBT_COMPOUND));
  scriptFiles.push(API.stringToNbt('{Line:"' + escapeNbtString(scriptFile) + '"}'));
  scriptNbt.setList('ScriptList', scriptFiles);
  npcnbt.setList('Scripts', scripts);
  npcnbt.setBoolean('ScriptEnabled', true);
  applyNpcNbt(npc, npcnbt);
  return true;
}
function npcRemoveScript(npc, scriptFile) {
  var npcnbt = npcGetNbt(npc);
  var scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  if (!scripts.length) {
    return false;
  }
  var removed = false;
  for (var i = 0; i < scripts.length; i++) {
    var scriptList = toJsArray(scripts[i].getList('ScriptList', NBT_COMPOUND));
    var kept = [];
    var tabChanged = false;
    for (var j = 0; j < scriptList.length; j++) {
      if (scriptList[j].getString('Line') === scriptFile) {
        removed = true;
        tabChanged = true;
      } else {
        kept.push(scriptList[j]);
      }
    }
    if (tabChanged) {
      scripts[i].setList('ScriptList', kept);
    }
  }
  if (removed) {
    npcnbt.setList('Scripts', scripts);
    applyNpcNbt(npc, npcnbt);
  }
  return removed;
}
/** Scripts keyed by tab index (starting at 0). */
function npcGetScripts(npc) {
  var npcnbt = npcGetNbt(npc);
  var scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  var npcScripts = {};
  for (var i = 0; i < scripts.length; i++) {
    var scriptList = toJsArray(scripts[i].getList('ScriptList', NBT_COMPOUND));
    for (var j = 0; j < scriptList.length; j++) {
      if (!npcScripts[i]) {
        npcScripts[i] = [];
      }
      npcScripts[i].push(scriptList[j].getString('Line'));
    }
  }
  return npcScripts;
}
function npcGetScriptsArray(npc) {
  var scripts = [];
  var npcScripts = npcGetScripts(npc);
  var keys = Object.keys(npcScripts);
  for (var i = 0; i < keys.length; i++) {
    scripts.push.apply(scripts, npcScripts[keys[i]]);
  }
  return scripts;
}
function npcHasScript(npc, scriptFile) {
  return npcGetScriptsArray(npc).indexOf(scriptFile) > -1;
}
function npcIsScriptEnabled(npc) {
  return !!npcGetNbt(npc).getBoolean('ScriptEnabled');
}
function npcSetScriptEnabled(npc, enabled) {
  var npcnbt = npcGetNbt(npc);
  npcnbt.setBoolean('ScriptEnabled', enabled);
  applyNpcNbt(npc, npcnbt);
}

var JavaClass = Java.type('java.lang.Class');
function resolveClass(target) {
  if (target == null) {
    throw new Error('reflection: target is null');
  }
  if (target instanceof JavaClass) {
    return target;
  }
  if (typeof target.getClass === 'function') {
    return target.getClass();
  }
  throw new Error('reflection: expected a Java instance or Class');
}
function collectNames(target, includeInherited, getMembers) {
  var names = [];
  var seen = {};
  var current = resolveClass(target);
  while (current) {
    var members = Java.from(getMembers(current));
    for (var i = 0; i < members.length; i++) {
      var name = String(members[i].getName());
      if (seen[name]) {
        continue;
      }
      seen[name] = true;
      names.push(name);
    }
    current = includeInherited ? current.getSuperclass() : null;
  }
  return names;
}
/**
 * Unique declared method names on a Java instance or Class.
 * Walks superclasses unless includeInherited is false.
 */
function getMethodNames(target, includeInherited) {
  if (includeInherited === undefined) {
    includeInherited = true;
  }
  return collectNames(target, includeInherited, function (clazz) {
    return clazz.getDeclaredMethods();
  });
}
/**
 * Unique declared field names on a Java instance or Class.
 * Walks superclasses unless includeInherited is false.
 */
function getFieldNames(target, includeInherited) {
  if (includeInherited === undefined) {
    includeInherited = true;
  }
  return collectNames(target, includeInherited, function (clazz) {
    return clazz.getDeclaredFields();
  });
}

var HttpServer = Java.type('com.sun.net.httpserver.HttpServer');
var HttpHandler = Java.type('com.sun.net.httpserver.HttpHandler');
var InetSocketAddress = Java.type('java.net.InetSocketAddress');
var File = Java.type('java.io.File');
var Files = Java.type('java.nio.file.Files');
var MessageDigest = Java.type('java.security.MessageDigest');
var CountDownLatch = Java.type('java.util.concurrent.CountDownLatch');
var URLDecoder = Java.type('java.net.URLDecoder');
var InputStreamReader = Java.type('java.io.InputStreamReader');
var BufferedReader = Java.type('java.io.BufferedReader');
var StringWriter = Java.type('java.io.StringWriter');
var JString = Java.type('java.lang.String');
var PORT = 25575;
var HOST = '127.0.0.1';
var BASE = 'http://' + HOST + ':' + PORT;
var SCRIPT_REL = 'scripts/ecmascript/debug/ai-integration.js';
var CHAT_PREFIX = '§6§l[Debug] §r';
var LOOK_DISTANCE = 5;
function debugDd() {
  var prefixed = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!(arg instanceof Error) && _typeof(arg) === 'object') {
      arg = JSON.stringify(arg, null, 2);
    }
    prefixed.push(CHAT_PREFIX + arg);
  }
  dd.apply(null, prefixed);
}
var HandlerImpl = Java.extend(HttpHandler);
var currentPlayer = null;
var listeningServer = null;
function hex(bytes) {
  var digits = '0123456789abcdef';
  var out = '';
  for (var i = 0; i < bytes.length; i++) {
    var b = bytes[i] & 0xff;
    out += digits.charAt(b >> 4) + digits.charAt(b & 0xf);
  }
  return out;
}
function hashScript() {
  var file = new File(API.getLevelDir(), SCRIPT_REL);
  if (!file.exists()) {
    return 'missing';
  }
  var digest = MessageDigest.getInstance('SHA-256');
  return hex(digest.digest(Files.readAllBytes(file.toPath())));
}
function readStream(stream) {
  var reader = new BufferedReader(new InputStreamReader(stream, 'UTF-8'));
  var writer = new StringWriter();
  var line;
  while ((line = reader.readLine()) != null) {
    writer.write(line);
    writer.write('\n');
  }
  reader.close();
  return String(writer.toString());
}
function queryMap(exchange) {
  var raw = exchange.getRequestURI().getRawQuery();
  var map = {};
  if (!raw) {
    return map;
  }
  var parts = String(raw).split('&');
  for (var i = 0; i < parts.length; i++) {
    var idx = parts[i].indexOf('=');
    if (idx < 0) {
      map[URLDecoder.decode(parts[i], 'UTF-8')] = '';
    } else {
      map[URLDecoder.decode(parts[i].substring(0, idx), 'UTF-8')] = URLDecoder.decode(parts[i].substring(idx + 1), 'UTF-8');
    }
  }
  return map;
}
function parsePayload(exchange, keys) {
  var q = queryMap(exchange);
  for (var i = 0; i < keys.length; i++) {
    if (q[keys[i]] != null && q[keys[i]] !== '') {
      return q[keys[i]];
    }
  }
  var body = readStream(exchange.getRequestBody()).replace(/^\s+|\s+$/g, '');
  if (!body) {
    return '';
  }
  if (body.charAt(0) === '{' || body.charAt(0) === '[') {
    try {
      var json = JSON.parse(body);
      for (var _i = 0; _i < keys.length; _i++) {
        if (json[keys[_i]] != null) {
          return String(json[keys[_i]]);
        }
      }
    } catch (e) {
      // treat as raw text
    }
  }
  return body;
}
function send(exchange, status, payload) {
  var text = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
  var bytes = new JString(text).getBytes('UTF-8');
  var headers = exchange.getResponseHeaders();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  exchange.sendResponseHeaders(status, bytes.length);
  var out = exchange.getResponseBody();
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
  var mcEntity = player.getMCEntity();
  // m_20194_ = net.minecraft.world.entity.Entity#getServer
  var server = mcEntity.m_20194_();
  // m_18695_ = net.minecraft.util.thread.BlockableEventLoop#isSameThread
  if (server.m_18695_()) {
    return fn();
  }
  var box = {
    value: null,
    error: null
  };
  var latch = new CountDownLatch(1);
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
  var players = API.getIWorld('minecraft:overworld').getAllPlayers();
  if (players && players.length) {
    currentPlayer = players[0];
    return currentPlayer;
  }
  return null;
}
function resolveLookTarget(player) {
  var entities = player.rayTraceEntities(LOOK_DISTANCE, false, false);
  if (entities && entities.length) {
    return entities[0];
  }
  return null;
}
function resolveLookBlock(player) {
  var trace = player.rayTraceBlock(LOOK_DISTANCE, false, false);
  if (trace) {
    return trace.getBlock();
  }
  return null;
}
function executeCmd(raw) {
  var player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  var cmd = String(raw).replace(/^\s+|\s+$/g, '');
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
  var list = nbt.getList(key, 10);
  if (!list) {
    return [];
  }
  return Java.from(list);
}
function readNpcLogs(uuid) {
  var player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  var id = String(uuid).replace(/^\s+|\s+$/g, '');
  if (!id) {
    throw new Error('Missing uuid');
  }
  return runOnServerThread(player, function () {
    var entity = player.getWorld().getEntity(id);
    if (!entity) {
      throw new Error('Entity not found: ' + id);
    }
    var nbt = npcGetNbt(entity);
    var scripts = nbtCompoundList(nbt, 'Scripts');
    var logs = [];
    for (var i = 0; i < scripts.length; i++) {
      var entries = nbtCompoundList(scripts[i], 'Console');
      for (var j = 0; j < entries.length; j++) {
        logs.push({
          tab: i,
          time: String(entries[j].getLong('Long')),
          message: entries[j].getString('String')
        });
      }
    }
    return {
      uuid: entity.getUUID(),
      name: entity.getName(),
      logs: logs
    };
  });
}
function executeJs(code) {
  var player = resolvePlayer();
  if (!player) {
    throw new Error('No player online');
  }
  var src = String(code);
  if (!src.replace(/^\s+|\s+$/g, '')) {
    throw new Error('Missing js');
  }
  return runOnServerThread(player, function () {
    var world = player.getWorld();
    var storeddata = world.storeddata;
    var tempdata = world.tempdata;
    var target = resolveLookTarget(player);
    var block = resolveLookBlock(player);
    var fn = new Function('player', 'world', 'API', 'dd', 'storeddata', 'tempdata', 'target', 'block', 'return (' + src + ');');
    return fn(player, world, API, debugDd, storeddata, tempdata, target, block);
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
    http.post(BASE + '/shutdown', {
      stop: true
    });
  } catch (e) {
    // old instance may already be gone
  }
  Thread.sleep(150);
}
function stopListeningServer() {
  var local = listeningServer;
  listeningServer = null;
  currentPlayer = null;
  if (local) {
    try {
      local.stop(0);
    } catch (e) {
      // already stopped
    }
    return;
  }
  requestShutdown();
}
function ensureServer() {
  var hash = hashScript();
  var existing = probeExisting();
  if (existing && existing.hash === hash) {
    return;
  }
  if (existing) {
    debugDd('ai-integration script changed, restarting listener');
    requestShutdown();
  }
  listeningServer = startServer(hash);
}
function startServer(scriptHash) {
  var server = HttpServer.create(new InetSocketAddress(HOST, PORT), 0);
  function route(handler) {
    return new HandlerImpl({
      handle: function handle(exchange) {
        try {
          if (!isLocal(exchange)) {
            send(exchange, 403, {
              ok: false,
              error: 'localhost only'
            });
            return;
          }
          handler(exchange);
        } catch (err) {
          var message = err && err.message ? err.message : String(err);
          var stack = err && err.stack ? err.stack : '';
          try {
            send(exchange, 500, {
              ok: false,
              error: message,
              stack: stack
            });
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
      }
    });
  }
  server.createContext('/health', route(function (exchange) {
    send(exchange, 200, {
      ok: true,
      hash: scriptHash,
      port: PORT
    });
  }));
  server.createContext('/shutdown', route(function (exchange) {
    send(exchange, 200, {
      ok: true,
      stopping: true
    });
    var toStop = server;
    new Thread(function () {
      Thread.sleep(50);
      if (listeningServer === toStop) {
        listeningServer = null;
      }
      toStop.stop(0);
    }).start();
  }));
  server.createContext('/cmd', route(function (exchange) {
    var cmd = parsePayload(exchange, ['cmd', 'command']);
    var result = executeCmd(cmd);
    send(exchange, 200, {
      ok: true,
      result: stringifyResult(result)
    });
  }));
  server.createContext('/reload', route(function (exchange) {
    var note = parsePayload(exchange, ['note', 'message', 'reason', 'text']);
    debugDd('Reload CustomNPC scripts');
    if (note) {
      debugDd(note);
    }
    send(exchange, 200, {
      ok: true,
      reloading: true,
      note: note || ''
    });
    new Thread(function () {
      Thread.sleep(50);
      try {
        executeCmd('noppes script reload');
      } catch (err) {
        debugDd('reload failed: ' + (err && err.message ? err.message : String(err)));
      }
    }).start();
  }));
  server.createContext('/js', route(function (exchange) {
    var code = parsePayload(exchange, ['js', 'code', 'script']);
    var result = executeJs(code);
    send(exchange, 200, {
      ok: true,
      result: stringifyResult(result)
    });
  }));
  server.createContext('/npclogs/read', route(function (exchange) {
    var uuid = parsePayload(exchange, ['uuid', 'entity', 'id']);
    var result = readNpcLogs(uuid);
    send(exchange, 200, {
      ok: true,
      uuid: result.uuid,
      name: result.name,
      logs: result.logs
    });
  }));
  server.setExecutor(null);
  server.start();
  debugDd('ai-integration listening on ' + BASE + ' (hash ' + scriptHash.substring(0, 8) + ')');
  return server;
}
function init(e) {
  currentPlayer = e.player;
  ensureServer();
}
function login(e) {
  currentPlayer = e.player;
  ensureServer();
}
function logout() {
  stopListeningServer();
}
function tick(e) {
  currentPlayer = e.player;
}

