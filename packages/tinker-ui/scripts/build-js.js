// @ts-check
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/**/*.ts', 'src/**/*.tsx'],
  outbase: 'src',
  outdir: 'dist',
  bundle: false,
  format: 'esm',
  target: 'es2022',
  jsx: 'automatic',
  minify: true,
  sourcemap: true,
});
