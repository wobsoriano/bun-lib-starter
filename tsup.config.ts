import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['bun', 'bun:ffi', 'bun:jsc', 'bun:sqlite'],
  dts: true,
});
