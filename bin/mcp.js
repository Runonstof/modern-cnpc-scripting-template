#!/usr/bin/env node
/**
 * Look up Mojang / Yarn / intermediary / Searge (MCP) names in mcp/*.tiny.
 * Streams the mapping file line by line (do not load 1.20.1.tiny into chat).
 *
 * Usage (PowerShell or WSL):
 *   node bin/mcp.js net.minecraft.world.entity.Entity#getServer
 *   node bin/mcp.js net.minecraft.world.entity.Entity#getServer Entity#isAlive
 *   node bin/mcp.js net/minecraft/world/entity/Entity/getServer
 *   node bin/mcp.js isSameThread
 *   node bin/mcp.js m_20194_
 *   node bin/mcp.js --file mcp/1.20.1.tiny net.minecraft.world.entity.Entity#getServer
 *
 * Preferred query: fully.qualified.ClassName#memberName
 * Also: tiny-style Class/member, member name only, or Searge (m_20194_).
 * Several arguments search several names in one pass.
 * A Searge argument is a reverse lookup: output is the full class and member.
 * Other hits print Class#member => searge. Invoke the searge name.
 * Each argument with no hit is reported on stderr as "not found: <query>".
 */

var fs = require("fs");
var path = require("path");
var readline = require("readline");

var root = path.join(__dirname, "..");
var defaultMap = path.join(root, "mcp", "1.20.1.tiny");

function printHelp() {
  process.stderr.write(
    "Usage: node bin/mcp.js [--file mcp/1.20.1.tiny] <query> [query...]\n" +
      "Queries: Class.path#member, Class/member, member name (isSameThread), or Searge (m_20194_).\n" +
      "Each argument is a separate search. A Searge name reverse-looks up to Class#member.\n" +
      "Arguments with no hit are reported as: not found: <query>\n"
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
  var trimmed = String(raw || "").trim();
  var parsed = {
    raw: raw,
    classPath: null,
    member: null,
    searge: null,
    memberOnly: false,
    seargeOnly: false,
    classOnly: false,
  };

  if (isSeargeToken(trimmed)) {
    parsed.searge = trimmed.toLowerCase();
    parsed.seargeOnly = true;
    parsed.member = parsed.searge;
    return parsed;
  }

  var hash = trimmed.indexOf("#");
  if (hash !== -1) {
    parsed.classPath = normPath(trimmed.slice(0, hash));
    parsed.member = normPath(trimmed.slice(hash + 1));
    if (isSeargeToken(parsed.member)) {
      parsed.searge = parsed.member;
    }
    return parsed;
  }

  if (trimmed.indexOf("/") !== -1) {
    var slashParts = normPath(trimmed).split("/").filter(Boolean);
    parsed.member = slashParts.pop();
    parsed.classPath = slashParts.join("/");
    if (isSeargeToken(parsed.member)) {
      parsed.searge = parsed.member;
    }
    return parsed;
  }

  if (trimmed.indexOf(".") !== -1) {
    parsed.classPath = normPath(trimmed);
    parsed.classOnly = true;
    return parsed;
  }

  parsed.member = trimmed.toLowerCase();
  parsed.memberOnly = true;
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
  if (!q.classPath) {
    return false;
  }

  var candidates = [cls.mojang, cls.yarn, cls.searge, cls.intermediary, cls.spigot].map(normPath);
  var want = q.classPath;

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
      if (q.classOnly && classMatches(q, currentClass)) {
        pushMatch({ kind: "class", class: currentClass, query: q.raw });
      } else if (q.seargeOnly) {
        var classSearge = String(currentClass.searge || "").toLowerCase();
        if (
          classSearge === q.searge ||
          classSearge.endsWith("/" + q.searge)
        ) {
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
    var classOk =
      query.memberOnly || query.seargeOnly || classMatches(query, currentClass);
    if (!classOk || !query.member) {
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

function toDotted(name) {
  return String(name || "").replace(/\//g, ".");
}

function classLabel(cls) {
  return toDotted(cls.mojang || cls.yarn || cls.searge || cls.intermediary || "");
}

function memberLabel(member) {
  return member.mojang || member.yarn || member.source || member.searge || "";
}

function formatMatch(entry) {
  var cls = classLabel(entry.class);
  if (entry.kind === "class") {
    return cls + " => " + toDotted(entry.class.searge || entry.class.intermediary || "?");
  }
  var searge = entry.member.searge || entry.member.intermediary || "?";
  return cls + "#" + memberLabel(entry.member) + " => " + searge;
}

rl.on("close", function () {
  var lines = [];
  var printed = {};
  var foundQueries = {};
  for (var i = 0; i < matches.length; i++) {
    foundQueries[matches[i].query] = true;
    var line = formatMatch(matches[i]);
    if (printed[line]) {
      continue;
    }
    printed[line] = true;
    lines.push(line);
  }
  process.stdout.write(lines.join("\n") + (lines.length ? "\n" : ""));

  var missing = 0;
  for (var q = 0; q < queries.length; q++) {
    if (foundQueries[queries[q]]) {
      continue;
    }
    process.stderr.write("not found: " + queries[q] + "\n");
    missing += 1;
  }
  process.exit(missing ? 2 : 0);
});
