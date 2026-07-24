import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@profile-pic': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784799388884.jpg',
      '@cert-dbms': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784802250402.pdf',
      '@cert-cpp': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784802250433.pdf',
      '@cert-dsa': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784802250444.pdf',
      '@cert-wns': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784802250489.pdf',
      '@cert-codeclash': 'C:/Users/hp/.gemini/antigravity-ide/brain/2c0785f0-a37c-484a-b6aa-f62db885f097/media__1784802250532.pdf',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
});
