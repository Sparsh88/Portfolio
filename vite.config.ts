import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Automatically ensure latest profile picture is synced
const currentProfile = 'C:/Users/hp/.gemini/antigravity-ide/brain/7fa200ee-a7a5-4519-96c5-36bcee4b52ea/media__1786368324280.jpg';
const destProfile = path.resolve(__dirname, 'public/profile.jpg');
if (fs.existsSync(currentProfile)) {
  try {
    fs.copyFileSync(currentProfile, destProfile);
  } catch {
    // ignore
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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

