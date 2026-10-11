import { defineConfig } from 'vite';
export default defineConfig({
  define: { global: {} },
  root: 'src',
  envDir: '..',
  base: '/goit-advancedjs-hw-03/',
  build: { outDir: '../dist', emptyOutDir: true },
});
