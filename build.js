const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'client');
const dest = path.join(__dirname, 'dist');

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const items = fs.readdirSync(srcDir, { withFileTypes: true });
  items.forEach((item) => {
    const srcPath = path.join(srcDir, item.name);
    const destPath = path.join(destDir, item.name);
    if (item.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

try {
  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
  copyRecursive(src, dest);
  console.log('Build complete. Files copied to', dest);
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
