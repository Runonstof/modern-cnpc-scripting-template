import path from 'path';
import glob from 'glob';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

function getEntries() {
  const files = [
    ...glob.sync('src/players/*.js'),
    ...glob.sync('src/npcs/*.js'),
    ...glob.sync('src/blocks/*.js'),
    ...glob.sync('src/items/*.js'),
    ...glob.sync('src/forge/*.js'),
    ...glob.sync('src/*.js'),

    ...glob.sync('src/players/*.ts'),
    ...glob.sync('src/npcs/*.ts'),
    ...glob.sync('src/blocks/*.ts'),
    ...glob.sync('src/items/*.ts'),
    ...glob.sync('src/forge/*.ts'),
    ...glob.sync('src/*.ts'),
  ];

  const entries = {};

  for (const file of files) {
    const name = path.basename(file, path.extname(file));
    entries[name] = file;
    console.log({name, entries});
  }

  return entries;
}

const entries = getEntries();

const stripExports = () => ({
  name: 'strip-exports',
  generateBundle(options, bundle) {
    Object.keys(bundle).forEach(fileName => {
      const file = bundle[fileName];
      if (file.type === 'chunk') {
        file.code = file.code.replace(/^export\s*\{[^}]*\}\s*;?\s*$/gm, '');
      }
    });
  }
});

const tamperMonkeyComments = {};

const tamperMonkeyCommentsRegex = /^(\/\/ ==UserScript==[\s\S]*?^\/\/ ==\/UserScript==)/m;

const preserveTampermonkeyComments = () => ({
  name: 'preserve-tampermonkey-comments',
  // Run in transform hook which runs before other plugins
  transform(code, id) {
    // Extract Tampermonkey comments
    const tampermonkeyMatch = code.match(tamperMonkeyCommentsRegex);

    if (tampermonkeyMatch) {
      const fileName = path.basename(id);
      tamperMonkeyComments[fileName] = tampermonkeyMatch[1];
      // Remove the comments from their current position
      return code.replace(tamperMonkeyCommentsRegex, '');
    }

    return code;
  },
  generateBundle(options, bundle) {
    const tamperMonkeyCommentsApplied = {};
    Object.keys(bundle).forEach(fileName => {
      const file = bundle[fileName];
      if (file.type === 'chunk') {
        // Extract Tampermonkey comments
        const tampermonkeyMatch = tamperMonkeyComments[fileName] || '';
        const isApplied = tamperMonkeyCommentsApplied[fileName] || false;

        if (tampermonkeyMatch && !isApplied) {
          tamperMonkeyCommentsApplied[fileName] = true;
          // Add them back at the very top
          file.code = tampermonkeyMatch + '\n\n' + file.code;
        }
      }
    });
  }
});

export default Object.entries(entries).map(([name, input]) => {

  const baseDirName = path.basename(path.dirname(input));
  const dirName = baseDirName === 'src' ? '' : `/${baseDirName}`;
  const fileName = path.basename(input, path.extname(input));

  return {
    input,
    // preserveEntrySignatures: true,
    output: {
      file: `ecmascript${dirName}/${fileName}.js`,
      format: 'es',
      name: name,
      compact: false,
    },
    plugins: [
      alias({
        entries: [
          { find: '~', replacement: path.resolve(__dirname, 'src') },
        ]
      }),
      resolve(),
      commonjs(),
      typescript(),
      babel({
        babelHelpers: 'bundled',
        presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
        comments: true,
      }),
      preserveTampermonkeyComments(),
      stripExports(),
    ],
  };
});