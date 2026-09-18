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
var SCRIPT_REL = 'scripts/ecmascript/players/sp-rcon.js';
var HandlerImpl = Java.extend(HttpHandler);
var currentPlayer = null;
function hex(bytes) {
  var digits = '0123456789abcdef';
  var out = '';
  for (var i = 0; i < bytes.length; i++) {
    var b = bytes[i] & 0xff;
    out += digits.charAt(b >> 4) + digits.charAt(b & 0xf);
  }
  return out;
}
function hashSpRcon() {
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
  var mc = player.getMCEntity().getServer();
  if (mc.isSameThread()) {
    return fn();
  }
  var box = {
    value: null,
    error: null
  };
  var latch = new CountDownLatch(1);
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
  var players = API.getIWorld('minecraft:overworld').getAllPlayers();
  if (players && players.length) {
    currentPlayer = players[0];
    return currentPlayer;
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
    var fn;
    try {
      fn = new Function('player', 'world', 'API', 'dd', src);
    } catch (e) {
      fn = new Function('player', 'world', 'API', 'dd', 'return (' + src + ');');
    }
    return fn(player, world, API, dd);
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
  server.createContext('/js', route(function (exchange) {
    var code = parsePayload(exchange, ['js', 'code', 'script']);
    var result = executeJs(code);
    send(exchange, 200, {
      ok: true,
      result: stringifyResult(result)
    });
  }));
  server.setExecutor(null);
  server.start();
  dd('sp-rcon listening on ' + BASE + ' (hash ' + scriptHash.substring(0, 8) + ')');
  return server;
}
function init(e) {
  currentPlayer = e.player;
  var hash = hashSpRcon();
  var existing = probeExisting();
  if (existing && existing.hash === hash) {
    return;
  }
  if (existing) {
    dd('sp-rcon script changed, restarting listener');
    requestShutdown();
  }
  startServer(hash);
}
function login(e) {
  currentPlayer = e.player;
}
function tick(e) {
  currentPlayer = e.player;
}

