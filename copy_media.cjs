const fs = require('fs');
const path = require('path');

const prevBrainDir = 'C:/Users/hp/.gemini/antigravity-ide/brain/4475ed7e-2265-4d91-9c97-44268187db70';
const currentBrainDir = 'C:/Users/hp/.gemini/antigravity-ide/brain/7fa200ee-a7a5-4519-96c5-36bcee4b52ea';
const publicDir = path.join(__dirname, 'public');
const certsDir = path.join(publicDir, 'certificates');

if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

// Copy profile pic
const newProfile = path.join(currentBrainDir, 'media__1786368324280.jpg');
if (fs.existsSync(newProfile)) {
  fs.copyFileSync(newProfile, path.join(publicDir, 'profile.jpg'));
} else if (fs.existsSync(path.join(prevBrainDir, 'media__1784961243785.jpg'))) {
  fs.copyFileSync(path.join(prevBrainDir, 'media__1784961243785.jpg'), path.join(publicDir, 'profile.jpg'));
}

// Copy certificate PDFs
if (fs.existsSync(prevBrainDir)) {
  if (fs.existsSync(path.join(prevBrainDir, 'media__1784802250402.pdf'))) {
    fs.copyFileSync(path.join(prevBrainDir, 'media__1784802250402.pdf'), path.join(certsDir, 'cert-dbms.pdf'));
  }
  if (fs.existsSync(path.join(prevBrainDir, 'media__1784802250433.pdf'))) {
    fs.copyFileSync(path.join(prevBrainDir, 'media__1784802250433.pdf'), path.join(certsDir, 'cert-cpp.pdf'));
  }
  if (fs.existsSync(path.join(prevBrainDir, 'media__1784802250444.pdf'))) {
    fs.copyFileSync(path.join(prevBrainDir, 'media__1784802250444.pdf'), path.join(certsDir, 'cert-dsa.pdf'));
  }
  if (fs.existsSync(path.join(prevBrainDir, 'media__1784802250489.pdf'))) {
    fs.copyFileSync(path.join(prevBrainDir, 'media__1784802250489.pdf'), path.join(certsDir, 'cert-wns.pdf'));
  }
  if (fs.existsSync(path.join(prevBrainDir, 'media__1784802250532.pdf'))) {
    fs.copyFileSync(path.join(prevBrainDir, 'media__1784802250532.pdf'), path.join(certsDir, 'cert-codeclash.pdf'));
  }
}

console.log('Successfully copied profile image and certificate PDFs to public directory!');

