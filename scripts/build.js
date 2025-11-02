import * as esbuild from 'esbuild';
import { readdirSync, copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const clientDir = join(rootDir, 'client');
const distDir = join(rootDir, 'build', 'public');

// Ensure build directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy static assets
function copyAssets(src, dest) {
  if (!existsSync(src)) return;
  
  const stat = statSync(src);
  if (stat.isDirectory()) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    const files = readdirSync(src);
    for (const file of files) {
      copyAssets(join(src, file), join(dest, file));
    }
  } else {
    const destDir = dirname(dest);
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }
    copyFileSync(src, dest);
  }
}

// Copy HTML file
const htmlFile = join(clientDir, 'index.html');
const distHtml = join(distDir, 'index.html');
if (existsSync(htmlFile)) {
  let htmlContent = readFileSync(htmlFile, 'utf-8');
  // Replace or add the script reference with the bundled JS
  if (htmlContent.includes('<script type="module" src="/src/main.tsx"></script>')) {
    htmlContent = htmlContent.replace(
      /<script type="module" src="\/src\/main\.tsx"><\/script>/,
      '<script src="/bundle.js"></script>'
    );
  } else if (!htmlContent.includes('<script src="/bundle.js"></script>')) {
    // Add the script tag before the closing body tag
    htmlContent = htmlContent.replace(
      '</body>',
      '<script src="/bundle.js"></script></body>'
    );
  }
  writeFileSync(distHtml, htmlContent);
}

// Process CSS
const cssFile = join(clientDir, 'src', 'index.css');
const cssContent = readFileSync(cssFile, 'utf-8');
const processedCss = await postcss([tailwindcss, autoprefixer]).process(cssContent, {
  from: cssFile,
  to: join(distDir, 'styles.css'),
});
writeFileSync(join(distDir, 'styles.css'), processedCss.css);

// Inject CSS and JS into HTML
let finalHtml = readFileSync(distHtml, 'utf-8');
// Add CSS link if not present
if (!finalHtml.includes('<link rel="stylesheet" href="/styles.css">')) {
  finalHtml = finalHtml.replace(
    '</head>',
    `<link rel="stylesheet" href="/styles.css"></head>`
  );
}
// Add JS script if not present
if (!finalHtml.includes('<script src="/bundle.js"></script>')) {
  finalHtml = finalHtml.replace(
    '</body>',
    '<script src="/bundle.js"></script></body>'
  );
}
writeFileSync(distHtml, finalHtml);

// Build React app with esbuild
await esbuild.build({
  entryPoints: [join(clientDir, 'src', 'main.tsx')],
  bundle: true,
  outfile: join(distDir, 'bundle.js'),
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  define: {
    '__API_BASE_URL__': JSON.stringify(process.env.API_BASE_URL || 'https://le-social-api.carl-g-bisaillon.workers.dev'),
    '__DEV__': String(process.env.NODE_ENV === 'development'),
    '__PROD__': String(process.env.NODE_ENV === 'production' || !process.env.NODE_ENV),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
  alias: {
    '@': join(clientDir, 'src'),
    '@shared': join(rootDir, 'shared'),
    '@assets': resolve(rootDir, 'assets'),
  },
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.gif': 'file',
    '.svg': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
  },
  minify: true,
  sourcemap: false,
  external: [],
}).catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});

// Copy assets
const assetsDir = join(rootDir, 'assets');
const distAssetsDir = join(distDir, 'assets');
if (existsSync(assetsDir)) {
  copyAssets(assetsDir, distAssetsDir);
}

console.log('Build completed successfully!');

