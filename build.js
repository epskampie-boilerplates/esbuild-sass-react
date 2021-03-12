#!/usr/bin/env node
const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    watch: true,
    sourcemap: true,
    outdir: 'public/compiled',
    plugins: [sassPlugin()],
    define: {
      'process.env.NODE_ENV': '"development"',
    },
  })
  .catch((e) => console.error(e.message));
