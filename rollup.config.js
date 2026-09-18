import path from 'path';
import { globSync } from 'glob';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

const ENTRY_TYPES = ['players', 'npcs', 'blocks', 'items', 'forge', 'debug'];
/** Debug scripts are player-script hooks for in-world AI verification. */
const OUTPUT_TYPE = { debug: 'players' };

function getEntries() {
  const files = ENTRY_TYPES.flatMap((type) => [
    ...globSync(`src/${type}/*.{js,ts}`),
  ]);

  const entries = {};

  for (const file of files) {
    const type = path.basename(path.dirname(file));
    const name = path.basename(file, path.extname(file));
    entries[`${type}/${name}`] = file;
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
  const outputType = OUTPUT_TYPE[baseDirName] || baseDirName;
  const dirName = outputType === 'src' ? '' : `/${outputType}`;
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
      typescript({ tsconfig: './tsconfig.json' }),
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