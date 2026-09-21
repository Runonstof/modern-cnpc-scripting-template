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
 * types[].fqn, types[].package, or types[].source.
 * Prints compact Markdown: full type docs for a name/fqn hit, a type list for a
 * package hit, or a package index for a source hit.
 */

var fs = require("fs");
var path = require("path");

var queries = process.argv.slice(2).filter(function (arg) {
  return arg && arg.charAt(0) !== "-";
});

if (queries.length === 0 || process.argv.indexOf("--help") !== -1 || process.argv.indexOf("-h") !== -1) {
  process.stderr.write(
    "Usage: node bin/get-class-info.js <name|fqn|package|source> [...]\n" +
      "Matches types in docs-llm/api.json on name, fqn, package, or source.\n" +
      "Prints Markdown (type docs, package type list, or source package index).\n"
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

function collectHits(needle) {
  var seen = {};
  var typeHits = [];
  var packageHits = [];
  var sourceHits = [];

  function pushUnique(list, type, i) {
    var key = (type.source || "") + "\0" + (type.fqn || type.name || String(i));
    if (seen[key]) {
      return;
    }
    seen[key] = true;
    list.push(type);
  }

  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    var name = String(type.name || "").toLowerCase();
    var fqn = String(type.fqn || "").toLowerCase();
    var pkg = String(type.package || "").toLowerCase();
    var source = String(type.source || "").toLowerCase();

    if (name === needle || fqn === needle) {
      pushUnique(typeHits, type, i);
    } else if (pkg === needle) {
      pushUnique(packageHits, type, i);
    } else if (source === needle) {
      pushUnique(sourceHits, type, i);
    }
  }

  return { typeHits: typeHits, packageHits: packageHits, sourceHits: sourceHits };
}

function indentText(text, pad) {
  return String(text || "").replace(/\n/g, "\n" + pad);
}

function renderMember(member) {
  var bits = [];
  var extra = [];
  if (member.value != null) extra.push("= " + member.value);
  if (member.deprecated) extra.push("deprecated");
  bits.push("- `" + (member.signature || member.name) + "`" + (extra.length ? " (" + extra.join(", ") + ")" : ""));
  if (member.description) bits.push("  " + indentText(member.description, "  "));
  var params = member.params || [];
  for (var p = 0; p < params.length; p++) bits.push("  - param: " + params[p]);
  if (member.returns) bits.push("  - returns: " + member.returns);
  var throwsList = member.throws || [];
  for (var t = 0; t < throwsList.length; t++) bits.push("  - throws: " + throwsList[t]);
  return bits.join("\n");
}

function renderInherited(title, groups) {
  if (!groups || !groups.length) return "";
  var lines = ["", "### " + title];
  for (var g = 0; g < groups.length; g++) {
    var group = groups[g];
    var names = (group.names || []).map(function (n) {
      return "`" + n + "`";
    });
    lines.push("- from `" + group.from + "`: " + names.join(", "));
  }
  return lines.join("\n");
}

function renderType(type) {
  var lines = [];
  lines.push("## " + type.name);
  lines.push("");
  lines.push("*" + (type.kind || "type") + "* `" + (type.fqn || type.name) + "`");
  if (type.source) lines.push("source: `" + type.source + "`");
  if (type.hook) {
    lines.push("");
    lines.push("Script hook: `" + type.hook + "`");
  }
  if (type.description) {
    lines.push("");
    lines.push(type.description);
  }
  var supers = type.supers || [];
  for (var s = 0; s < supers.length; s++) {
    var sup = supers[s];
    lines.push("");
    lines.push(String(sup.label || "").replace(/:$/, "") + ": " + (sup.values || []).join(", "));
  }
  var fields = type.fields || [];
  if (fields.length) {
    lines.push("");
    lines.push("### Fields");
    for (var f = 0; f < fields.length; f++) lines.push(renderMember(fields[f]));
  }
  var inheritedFields = renderInherited("Inherited fields", type.inheritedFields);
  if (inheritedFields) lines.push(inheritedFields);
  var methods = type.methods || [];
  if (methods.length) {
    lines.push("");
    lines.push("### Methods");
    for (var m = 0; m < methods.length; m++) lines.push(renderMember(methods[m]));
  }
  var inheritedMethods = renderInherited("Inherited methods", type.inheritedMethods);
  if (inheritedMethods) lines.push(inheritedMethods);
  return lines.join("\n") + "\n";
}

function typeNameLine(type) {
  return "- `" + type.name + "` (`" + (type.fqn || type.name) + "`)";
}

function renderPackageList(list) {
  var byPkg = {};
  var order = [];
  for (var i = 0; i < list.length; i++) {
    var type = list[i];
    var pkg = type.package || "(no package)";
    if (!byPkg[pkg]) {
      byPkg[pkg] = [];
      order.push(pkg);
    }
    byPkg[pkg].push(type);
  }
  order.sort();
  var chunks = [];
  for (var p = 0; p < order.length; p++) {
    var pkgName = order[p];
    var typesInPkg = byPkg[pkgName];
    typesInPkg.sort(function (a, b) {
      return String(a.name).localeCompare(String(b.name));
    });
    var lines = ["# " + pkgName, ""];
    for (var t = 0; t < typesInPkg.length; t++) lines.push(typeNameLine(typesInPkg[t]));
    chunks.push(lines.join("\n"));
  }
  return chunks.join("\n\n") + "\n";
}

function renderSourceIndex(list) {
  var bySource = {};
  var sourceOrder = [];
  for (var i = 0; i < list.length; i++) {
    var type = list[i];
    var source = type.source || "(no source)";
    if (!bySource[source]) {
      bySource[source] = {};
      sourceOrder.push(source);
    }
    var pkg = type.package || "(no package)";
    if (!bySource[source][pkg]) bySource[source][pkg] = 0;
    bySource[source][pkg] += 1;
  }
  sourceOrder.sort();
  var chunks = [];
  for (var s = 0; s < sourceOrder.length; s++) {
    var src = sourceOrder[s];
    var pkgs = Object.keys(bySource[src]).sort();
    var lines = ["# " + src, ""];
    for (var p = 0; p < pkgs.length; p++) {
      lines.push("- `" + pkgs[p] + "` (" + bySource[src][pkgs[p]] + " types)");
    }
    chunks.push(lines.join("\n"));
  }
  return chunks.join("\n\n") + "\n";
}

var out = [];
var missed = 0;

for (var q = 0; q < queries.length; q++) {
  var hits = collectHits(needles[q]);
  if (!hits.typeHits.length && !hits.packageHits.length && !hits.sourceHits.length) {
    missed += 1;
    out.push(
      "## " + queries[q] + "\n\nNo documentation found for this class or it doesn't seem to exist"
    );
    continue;
  }
  if (hits.sourceHits.length) out.push(renderSourceIndex(hits.sourceHits).trim());
  if (hits.packageHits.length) out.push(renderPackageList(hits.packageHits).trim());
  if (hits.typeHits.length) out.push(hits.typeHits.map(renderType).join("\n").trim());
}

process.stdout.write(out.join("\n\n") + (out.length ? "\n" : ""));

if (missed) {
  process.exit(2);
}
