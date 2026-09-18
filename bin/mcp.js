#!/usr/bin/env node
/**
 * Look up Mojang / Yarn / intermediary / Searge (MCP) names in mcp/*.tiny.
 * Streams the mapping file line by line (do not load 1.20.1.tiny into chat).
 *
 * Usage (PowerShell or WSL):
 *   node bin/mcp.js net.minecraft.world.entity.Entity#getServer
 *   node bin/mcp.js --file mcp/1.20.1.tiny net.minecraft.world.entity.Entity#getServer
 *
 * Query form: fully.qualified.ClassName#memberName
 * Call the obfuscated name from member.searge. Do not load the .tiny file into chat.
 */

var fs = require("fs");
var path = require("path");
var readline = require("readline");

var root = path.join(__dirname, "..");
var defaultMap = path.join(root, "mcp", "1.20.1.tiny");

function printHelp() {
  process.stderr.write(
    "Usage: node bin/mcp.js [--file mcp/1.20.1.tiny] <Class.path#member> [...]\n" +
      "Query must be fully.qualified.ClassName#methodOrField. Use member.searge at callsites.\n"
  );
}

var args = process.argv.slice(2);
var mapFile = defaultMap;
var queries = [];

for (var i = 0; i < args.length; i++) {
  var arg = args[i];
  if (arg === "-h" || arg === "--help") {
    printHelp();
    process.exit(0);
  }
  if (arg === "--file" || arg === "-f") {
    i += 1;
    if (!args[i]) {
      process.stderr.write("Missing path after --file\n");
      process.exit(1);
    }
    mapFile = path.isAbsolute(args[i]) ? args[i] : path.join(root, args[i]);
    continue;
  }
  if (arg.charAt(0) !== "-") {
    queries.push(arg);
  }
}

if (queries.length === 0) {
  printHelp();
  process.exit(1);
}

if (!fs.existsSync(mapFile)) {
  process.stderr.write("Missing " + mapFile + "\n");
  process.exit(1);
}

function normPath(value) {
  return String(value || "")
    .replace(/\\/g, "/")
    .replace(/#/g, "/")
    .replace(/\./g, "/")
    .replace(/\/+/g, "/")
    .replace(/^\/|\/$/g, "")
    .toLowerCase();
}

function isSeargeToken(token) {
  return /^(m|f|p|C)_\d+_$/.test(token) || /^C_\d+_$/.test(token);
}

function parseQuery(raw) {
  var n = normPath(raw);
  var parts = n.split("/").filter(Boolean);
  var last = parts[parts.length - 1] || "";
  var parsed = {
    raw: raw,
    path: n,
    classPath: n,
    member: null,
    searge: isSeargeToken(last) ? last : null,
  };

  if (parts.length >= 2 && !/^c_\d+_$/.test(last)) {
    parsed.member = last;
    parsed.classPath = parts.slice(0, -1).join("/");
  }

  return parsed;
}

var parsedQueries = queries.map(parseQuery);

function namesFromCols(cols, ns) {
  var out = {};
  var keys = ["source", "mojang", "intermediary", "yarn", "searge", "spigot"];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (ns[key] != null && cols[ns[key]]) {
      out[key] = cols[ns[key]];
    }
  }
  return out;
}

function classMatches(q, cls) {
  if (q.searge && q.member === q.searge && q.classPath === q.searge) {
    return (
      String(cls.searge || "").toLowerCase() === q.searge ||
      String(cls.source || "").toLowerCase() === q.searge
    );
  }

  var candidates = [cls.mojang, cls.yarn, cls.searge, cls.intermediary, cls.spigot].map(normPath);
  var want = q.member ? q.classPath : q.path;

  for (var i = 0; i < candidates.length; i++) {
    var c = candidates[i];
    if (!c) {
      continue;
    }
    if (c === want || c.endsWith("/" + want)) {
      return true;
    }
  }
  return false;
}

function memberMatches(q, member) {
  if (!q.member && !q.searge) {
    return false;
  }

  var names = [member.mojang, member.yarn, member.searge, member.intermediary, member.source, member.spigot];
  var needles = [];
  if (q.member) {
    needles.push(q.member);
  }
  if (q.searge) {
    needles.push(q.searge);
  }

  for (var i = 0; i < names.length; i++) {
    var n = String(names[i] || "").toLowerCase();
    if (!n) {
      continue;
    }
    for (var j = 0; j < needles.length; j++) {
      if (n === needles[j]) {
        return true;
      }
    }
  }
  return false;
}

function parseHeader(line) {
  var cols = line.split("\t");
  if (cols[0] !== "tiny") {
    return null;
  }
  var ns = {};
  for (var i = 3; i < cols.length; i++) {
    ns[cols[i]] = i - 3;
  }
  return ns;
}

function splitMemberLine(line) {
  if (line.charAt(0) !== "\t") {
    return null;
  }
  var cols = line.split("\t");
  // ["", kind, desc, ...namespaces]
  var kind = cols[1];
  if (kind !== "m" && kind !== "f") {
    return null;
  }
  return { kind: kind, desc: cols[2], names: cols.slice(3) };
}

var matches = [];
var seen = {};
var currentClass = null;
var ns = null;

function pushMatch(entry) {
  var key = JSON.stringify(entry);
  if (seen[key]) {
    return;
  }
  seen[key] = true;
  matches.push(entry);
}

var rl = readline.createInterface({
  input: fs.createReadStream(mapFile, { encoding: "utf8" }),
  crlfDelay: Infinity,
});

rl.on("line", function (line) {
  if (!ns) {
    ns = parseHeader(line);
    return;
  }

  if (!line) {
    return;
  }

  if (line.charAt(0) === "c") {
    var classCols = line.split("\t").slice(1);
    currentClass = namesFromCols(classCols, ns);
    for (var qi = 0; qi < parsedQueries.length; qi++) {
      var q = parsedQueries[qi];
      if (!q.member) {
        if (classMatches(q, currentClass)) {
          pushMatch({ kind: "class", class: currentClass, query: q.raw });
        }
      }
    }
    return;
  }

  var member = splitMemberLine(line);
  if (!member || !currentClass) {
    return;
  }

  var memberNames = namesFromCols(member.names, ns);
  memberNames.descriptor = member.desc;

  for (var i = 0; i < parsedQueries.length; i++) {
    var query = parsedQueries[i];
    var seargeOnly = query.searge && query.path === query.searge;
    var classOk = seargeOnly || classMatches(query, currentClass);
    if (!classOk) {
      continue;
    }
    if (!query.member && !seargeOnly) {
      continue;
    }
    if (memberMatches(query, memberNames)) {
      pushMatch({
        kind: member.kind === "f" ? "field" : "method",
        class: currentClass,
        member: memberNames,
        query: query.raw,
      });
    }
  }
});

rl.on("close", function () {
  process.stdout.write(JSON.stringify(matches, null, 2) + "\n");
  process.exit(matches.length === 0 ? 2 : 0);
});
