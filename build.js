const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Exclude build artifacts and git
      if (['node_modules', 'build', 'dist', '.git', '.system_generated'].includes(entry.name)) {
        continue;
      }
      copyRecursive(srcPath, destPath);
    } else {
      // Copy files
      if (!['build.js'].includes(entry.name)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// 1. Copy into build/
copyRecursive('.', 'build');
console.log('✓ Copied files to build/');

// 2. Copy into dist/
copyRecursive('.', 'dist');
console.log('✓ Copied files to dist/');

// 3. For Linux build containers (Netlify), also create the literal 'build/<project-name>' path
if (process.platform !== 'win32') {
  try {
    copyRecursive('.', 'build/<project-name>');
    console.log('✓ Created build/<project-name> for Netlify legacy config');
  } catch (e) {
    console.warn('Note:', e.message);
  }

  try {
    copyRecursive('.', 'build/kairos-events');
    console.log('✓ Created build/kairos-events');
  } catch (e) {
    console.warn('Note:', e.message);
  }
}

console.log('✓ KAIROS build complete. Ready for instant deployment!');
