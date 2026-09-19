#!/usr/bin/env node
/**
 * Talk to the in-game ai-integration HTTP listener (localhost only).
 *
 * Usage (PowerShell or WSL):
 *   node bin/execute.js command /time set day
 *   node bin/execute.js command time set day
 *   node bin/execute.js js "player.setMotionY(.5) || true"
 *   node bin/execute.js reload
 *   node bin/execute.js reload Vaelith now follows the player
 *   node bin/execute.js npclogs read <uuid>
 */

var http = require("http");
var fs = require("fs");
var path = require("path");

var HOST = "127.0.0.1";
var PORT = 25575;
var HEALTH_TIMEOUT_MS = 1500;
var REQUEST_TIMEOUT_MS = 15000;

var OFFLINE_HINT =
  "ai-integration is not listening at http://" +
  HOST +
  ":" +
  PORT +
  ". Enable src/debug/ai-integration.js in the player script tab, then reload once in-game.";

function printHelp() {
  process.stderr.write(
    "Usage: node bin/execute.js <command|js|reload|npclogs> [...]\n" +
      "  command [ /]time set day\n" +
      "  js \"block && block.getName()\"\n" +
      "  reload [one-sentence change note]\n" +
      "  npclogs read <uuid>\n" +
      "Requires ai-integration.js enabled as a player script and a player online.\n"
  );
}

var args = process.argv.slice(2);
if (args.length === 0 || args[0] === "-h" || args[0] === "--help") {
  printHelp();
  process.exit(args.length === 0 ? 1 : 0);
}

var action = String(args[0]).toLowerCase();
if (action === "cmd") {
  action = "command";
}

function fail(message, code) {
  process.stderr.write(message + "\n");
  process.exit(code == null ? 1 : code);
}

function request(method, pathname, body, timeoutMs, done) {
  var payload = body == null ? "" : JSON.stringify(body);
  var headers = {};
  if (payload) {
    headers["Content-Type"] = "application/json; charset=utf-8";
    headers["Content-Length"] = Buffer.byteLength(payload);
  }
  var settled = false;
  function finish(err, data, status) {
    if (settled) {
      return;
    }
    settled = true;
    done(err, data, status);
  }
  var req = http.request(
    {
      hostname: HOST,
      port: PORT,
      path: pathname,
      method: method,
      headers: headers,
    },
    function (res) {
      var chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        var text = Buffer.concat(chunks).toString("utf8");
        var parsed = null;
        try {
          parsed = JSON.parse(text);
        } catch (e) {
          finish(new Error("Non-JSON response (" + res.statusCode + "): " + text), null, res.statusCode);
          return;
        }
        finish(null, parsed, res.statusCode);
      });
    }
  );
  req.setTimeout(timeoutMs, function () {
    req.destroy();
    finish(new Error(OFFLINE_HINT), null, 0);
  });
  req.on("error", function (err) {
    if (err && (err.code === "ECONNREFUSED" || err.code === "ECONNRESET" || err.code === "ETIMEDOUT")) {
      finish(new Error(OFFLINE_HINT), null, 0);
      return;
    }
    finish(err, null, 0);
  });
  if (payload) {
    req.write(payload);
  }
  req.end();
}

function post(pathname, body, done) {
  request("GET", "/health", null, HEALTH_TIMEOUT_MS, function (err, data) {
    if (err || !data || data.ok !== true) {
      done(new Error(OFFLINE_HINT), null, 0);
      return;
    }
    request("POST", pathname, body, REQUEST_TIMEOUT_MS, done);
  });
}

function printResponse(err, data, status) {
  if (err) {
    fail(err.message || String(err));
  }
  process.stdout.write(JSON.stringify(data, null, 2) + "\n");
  if (status >= 400 || (data && data.ok === false)) {
    process.exit(1);
  }
}

if (action === "command") {
  var cmd = args.slice(1).join(" ").replace(/^\s+|\s+$/g, "");
  if (!cmd) {
    fail("Missing command. Example: node bin/execute.js command time set day");
  }
  post("/cmd", { cmd: cmd }, printResponse);
} else if (action === "js") {
  var src = args.slice(1).join(" ").replace(/^\s+|\s+$/g, "");
  if (!src) {
    fail('Missing js. Example: node bin/execute.js js "player.name"');
  }
  if (fs.existsSync(src) && fs.statSync(src).isFile()) {
    src = fs.readFileSync(path.resolve(src), "utf8");
  }
  src = src.replace(/;+\s*$/g, "");
  post("/js", { js: src }, printResponse);
} else if (action === "reload") {
  var note = args.slice(1).join(" ").replace(/^\s+|\s+$/g, "");
  post("/reload", note ? { note: note } : { reload: true }, printResponse);
} else if (action === "npclogs") {
  var sub = args[1] ? String(args[1]).toLowerCase() : "";
  if (sub !== "read") {
    fail("Usage: node bin/execute.js npclogs read <uuid>");
  }
  var uuid = args.slice(2).join(" ").replace(/^\s+|\s+$/g, "");
  if (!uuid) {
    fail("Missing uuid. Example: node bin/execute.js npclogs read <uuid>");
  }
  post("/npclogs/read", { uuid: uuid }, printResponse);
} else {
  printHelp();
  fail("Unknown action: " + args[0]);
}
