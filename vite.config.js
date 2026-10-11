import { defineConfig } from 'vite';
export default defineConfig({
  define: { global: {} },
  root: 'src',
  envDir: '..',
  base: './',
  build: { outDir: '../dist', emptyOutDir: true },
});
