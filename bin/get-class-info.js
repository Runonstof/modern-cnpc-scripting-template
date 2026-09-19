#!/usr/bin/env node
/**
 * Look up API types from docs-llm/api.json (all Javadoc sources).
 *
 * Usage (PowerShell or WSL):
 *   node bin/get-class-info.js IBlock IPlayer
 *   node bin/get-class-info.js noppes.npcs.api.gui
 *   node bin/get-class-info.js customnpcs
 *
 * Each argument is an exact, case-insensitive match against types[].name,
 * types[].fqn, types[].package, or types[].source. Matching entries print as JSON.
 */

var fs = require("fs");
var path = require("path");

var queries = process.argv.slice(2).filter(function (arg) {
  return arg && arg.charAt(0) !== "-";
});

if (queries.length === 0 || process.argv.indexOf("--help") !== -1 || process.argv.indexOf("-h") !== -1) {
  process.stderr.write(
    "Usage: node bin/get-class-info.js <name|fqn|package> [...]\n" +
      "Matches types in docs-llm/api.json on name, fqn, package, or source.\n"
  );
  process.exit(queries.length === 0 ? 1 : 0);
}

var apiPath = path.join(__dirname, "..", "docs-llm", "api.json");
if (!fs.existsSync(apiPath)) {
  process.stderr.write("Missing " + apiPath + "\n");
  process.exit(1);
}

var api = JSON.parse(fs.readFileSync(apiPath, "utf8"));
var types = api.types || [];
var needles = queries.map(function (q) {
  return q.toLowerCase();
});

var seen = {};
var matches = [];

for (var i = 0; i < types.length; i++) {
  var type = types[i];
  var name = String(type.name || "").toLowerCase();
  var fqn = String(type.fqn || "").toLowerCase();
  var pkg = String(type.package || "").toLowerCase();
  var source = String(type.source || "").toLowerCase();
  var hit = false;

  for (var j = 0; j < needles.length; j++) {
    var needle = needles[j];
    if (name === needle || fqn === needle || pkg === needle || source === needle) {
      hit = true;
      break;
    }
  }

  if (!hit) {
    continue;
  }

  var key = (type.source || "") + "\0" + (type.fqn || type.name || String(i));
  if (seen[key]) {
    continue;
  }
  seen[key] = true;
  matches.push(type);
}

process.stdout.write(JSON.stringify(matches) + "\n");

if (matches.length === 0) {
  process.exit(2);
}
