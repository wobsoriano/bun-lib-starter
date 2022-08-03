import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['bun:ffi'],
  dts: true,
  onSuccess: "bun run build:rust"
});
