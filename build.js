const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    watch: true,
    sourcemap: true,
    outdir: 'public/compiled',
    plugins: [sassPlugin()],
  })
  .catch((e) => console.error(e.message));
