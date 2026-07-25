import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Auto-sync uploaded profile photo into public folder
const sourceProfileImg = 'C:/Users/hp/.gemini/antigravity-ide/brain/4475ed7e-2265-4d91-9c97-44268187db70/media__1784961243785.jpg';
const targetProfileImg = path.resolve(__dirname, 'public/profile.jpg');
if (fs.existsSync(sourceProfileImg)) {
  try {
    fs.copyFileSync(sourceProfileImg, targetProfileImg);
    console.log('[Vite Config] Updated public/profile.jpg with user uploaded photo.');
  } catch (err) {
    console.error('[Vite Config] Error copying profile image:', err);
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
    fs: {
      allow: ['..', 'C:/Users/hp/.gemini/antigravity-ide/brain'],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
});
