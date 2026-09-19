#!/usr/bin/env node
/**
 * Write the ai-integration password (and optional host/port) to gitignored bin/auth.json.
 *
 * Usage:
 *   node bin/auth.js <password>
 *   node bin/auth.js <password> <host>
 *   node bin/auth.js <password> <host> <port>
 */

var fs = require("fs");
var path = require("path");

var file = path.join(__dirname, "auth.json");
var args = process.argv.slice(2);
if (args.length === 0 || args[0] === "-h" || args[0] === "--help") {
  process.stderr.write("Usage: node bin/auth.js <password> [host] [port]\n");
  process.exit(args.length === 0 ? 1 : 0);
}

var password = String(args[0]);
var host = args[1] ? String(args[1]) : "";
var portArg = args[2] ? String(args[2]) : "";
var data = { password: password };
var prev = {};
if (fs.existsSync(file)) {
  try {
    prev = JSON.parse(fs.readFileSync(file, "utf8")) || {};
  } catch (e) {
    prev = {};
  }
}
if (host) {
  data.host = host;
} else if (prev.host) {
  data.host = prev.host;
}
if (portArg) {
  data.port = parseInt(portArg, 10);
} else if (prev.port) {
  data.port = prev.port;
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
process.stdout.write("Wrote " + file + "\n");
