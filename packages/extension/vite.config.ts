import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
        content: resolve(__dirname, 'src/contentScript.js'),
        background: resolve(__dirname, 'src/background.js')
      },
      output: {
        entryFileNames: 'src/[name].js'
      }
    }
  }
});
