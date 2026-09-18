#!/usr/bin/env node
/**
 * Talk to the in-game ai-integration HTTP listener (localhost only).
 *
 * Usage (PowerShell or WSL):
 *   node bin/execute.js command /time set day
 *   node bin/execute.js command time set day
 *   node bin/execute.js js "player.setMotionY(.5) || true"
 *   node bin/execute.js reload
 */

var http = require("http");

var HOST = "127.0.0.1";
var PORT = 25575;

function printHelp() {
  process.stderr.write(
    "Usage: node bin/execute.js <command|js|reload> [...]\n" +
      "  command [ /]time set day\n" +
      "  js \"block && block.getName()\"\n" +
      "  reload\n" +
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

function post(pathname, body, done) {
  var payload = JSON.stringify(body == null ? {} : body);
  var req = http.request(
    {
      hostname: HOST,
      port: PORT,
      path: pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(payload),
      },
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
          done(new Error("Non-JSON response (" + res.statusCode + "): " + text), null, res.statusCode);
          return;
        }
        done(null, parsed, res.statusCode);
      });
    }
  );
  req.on("error", function (err) {
    if (err && err.code === "ECONNREFUSED") {
      done(
        new Error(
          "Cannot reach ai-integration at http://" +
            HOST +
            ":" +
            PORT +
            ". Enable src/debug/ai-integration.js in the player script tab, then reload once in-game."
        ),
        null,
        0
      );
      return;
    }
    done(err, null, 0);
  });
  req.write(payload);
  req.end();
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
  src = src.replace(/;+\s*$/g, "");
  post("/js", { js: src }, printResponse);
} else if (action === "reload") {
  post("/reload", { reload: true }, printResponse);
} else {
  printHelp();
  fail("Unknown action: " + args[0]);
}
