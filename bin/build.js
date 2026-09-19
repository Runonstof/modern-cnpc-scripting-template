#!/usr/bin/env node
/**
 * Run rollup with optional entry-point filters.
 *
 * Usage:
 *   node bin/build.js
 *   node bin/build.js npcs/aldric mount
 *   node bin/build.js --watch npcs
 */

const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const watch = args[0] === '--watch' || args[0] === '-w';
const filters = watch ? args.slice(1) : args;

process.env.BUILD_FILTERS = filters.join('\n');

const rollupJs = path.join(
  __dirname,
  '..',
  'node_modules',
  'rollup',
  'dist',
  'bin',
  'rollup'
);
const rollupArgs = [rollupJs, '-c'];
if (watch) {
  rollupArgs.push('-w');
}

const child = spawn(process.execPath, rollupArgs, {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code == null ? 1 : code);
});
