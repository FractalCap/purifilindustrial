
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = process.cwd();
const src = path.join(root, 'src');

console.log(`Refactoring from ${src} to ${root}...`);

// Helper to move files
function moveFiles(sourceDir, destDir) {
  if (!fs.existsSync(sourceDir)) return;
  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    const stat = fs.statSync(srcPath);
    if (stat.isFile()) {
      // Handle naming collisions if any (though unlikely in this project)
      if (fs.existsSync(destPath)) {
        console.warn(`Warning: ${file} already exists in root. Overwriting.`);
      }
      fs.renameSync(srcPath, destPath);
      console.log(`Moved ${file}`);
    } else if (stat.isDirectory()) {
        // Recursive move
        moveFiles(srcPath, destDir);
        // Remove empty dir
        try {
            fs.rmdirSync(srcPath);
        } catch (e) {
            // ignore
        }
    }
  });
}

// 1. Move files
if (fs.existsSync(src)) {
    moveFiles(src, root);
    try {
        if (fs.existsSync(src)) fs.rmdirSync(src);
    } catch (e) {
        console.log("Could not remove src dir (not empty?)");
    }
}

// 2. Update imports in .ts, .tsx, .js, .jsx
const files = fs.readdirSync(root).filter(f => /\.(ts|tsx|js|jsx)$/.test(f) && f !== 'refactor_structure.js' && f !== 'vite.config.ts');

files.forEach(file => {
    const filePath = path.join(root, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace @/ imports
    content = content.replace(/from\s+['"]@\/(.*?)['"]/g, (match, p1) => {
        const name = path.basename(p1);
        return `from "./${name}"`;
    });
    
    // Replace relative imports with paths
    content = content.replace(/from\s+['"]\.\.?\/(.*?)['"]/g, (match, p1) => {
        const name = path.basename(p1);
        return `from "./${name}"`;
    });
    
    // Replace direct imports (like css or side effects)
    content = content.replace(/import\s+['"]\.\.?\/(.*?)['"]/g, (match, p1) => {
         const name = path.basename(p1);
         return `import "./${name}"`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated imports in ${file}`);
});

// 3. Update index.html
const indexHtmlPath = path.join(root, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    indexHtml = indexHtml.replace('/src/main.tsx', '/main.tsx');
    fs.writeFileSync(indexHtmlPath, indexHtml);
    console.log("Updated index.html");
}

// 4. Update tsconfig.json
const tsconfigPath = path.join(root, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
    try {
        let tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        if (tsconfig.compilerOptions) {
            delete tsconfig.compilerOptions.paths;
            delete tsconfig.compilerOptions.baseUrl;
        }
        tsconfig.include = ["./**/*"];
        tsconfig.exclude = ["node_modules", "dist", ".vercel"];
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
        console.log("Updated tsconfig.json");
    } catch (e) {
        console.error("Error updating tsconfig.json", e);
    }
}

// 5. Update vite.config.ts
const viteConfigPath = path.join(root, 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    // Remove tsconfigPaths import
    viteConfig = viteConfig.replace(/import tsconfigPaths from "vite-tsconfig-paths";\r?\n/, '');
    // Remove tsconfigPaths() plugin
    viteConfig = viteConfig.replace(/tsconfigPaths\(\),?\r?\n?/, '');
    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log("Updated vite.config.ts");
}

console.log("Refactoring complete.");
