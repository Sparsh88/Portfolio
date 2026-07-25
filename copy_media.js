import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = 'C:/Users/hp/.gemini/antigravity-ide/brain/4475ed7e-2265-4d91-9c97-44268187db70';
const publicDir = path.join(__dirname, 'public');
const certsDir = path.join(publicDir, 'certificates');

if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

// Copy profile pic
fs.copyFileSync(path.join(srcDir, 'media__1784961243785.jpg'), path.join(publicDir, 'profile.jpg'));

// Copy certificate PDFs
fs.copyFileSync(path.join(srcDir, 'media__1784802250402.pdf'), path.join(certsDir, 'cert-dbms.pdf'));
fs.copyFileSync(path.join(srcDir, 'media__1784802250433.pdf'), path.join(certsDir, 'cert-cpp.pdf'));
fs.copyFileSync(path.join(srcDir, 'media__1784802250444.pdf'), path.join(certsDir, 'cert-dsa.pdf'));
fs.copyFileSync(path.join(srcDir, 'media__1784802250489.pdf'), path.join(certsDir, 'cert-wns.pdf'));
fs.copyFileSync(path.join(srcDir, 'media__1784802250532.pdf'), path.join(certsDir, 'cert-codeclash.pdf'));

console.log('Successfully copied profile image and certificate PDFs to public directory!');
