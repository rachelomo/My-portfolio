// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Ensures large images are not inlined
    outDir: 'dist',
  },
  server: {
    open: true, // Opens the browser on server start
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
