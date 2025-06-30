/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';
import * as path from 'path';
import * as fs from 'fs';
import { execSync } from 'child_process';

// Custom plugin to handle SCSS compilation and copying
const scssPlugin = () => {
  return {
    name: 'scss-plugin',
    writeBundle() {
      console.log('🔧 Starting SCSS processing...');

      // Copy SCSS files to dist, maintaining directory structure
      const scssFiles = glob.sync('src/**/*.scss', { cwd: __dirname });
      console.log(`📄 Found ${scssFiles.length} SCSS files to copy`);

      scssFiles.forEach(file => {
        const destPath = path.join(__dirname, 'dist', file);
        const destDir = path.dirname(destPath);
        fs.mkdirSync(destDir, { recursive: true });
        fs.copyFileSync(path.join(__dirname, file), destPath);
      });
      console.log('✓ SCSS files copied to dist');

      // Compile main SCSS to CSS with expanded output
      try {
        const sassCmd = `npx sass src/index.scss:dist/styles.css --style=expanded --no-source-map`;
        console.log(`Running: ${sassCmd}`);
        execSync(sassCmd, { cwd: __dirname, stdio: 'inherit' });
        console.log('✓ SCSS compiled to styles.css');
      } catch (error) {
        console.error('✗ SCSS compilation failed:', error);
        throw error;
      }

      // Compile TypeScript declarations
      try {
        const tscCmd = `npx tsc --project tsconfig.lib.json`;
        console.log(`Running: ${tscCmd}`);
        execSync(tscCmd, { cwd: __dirname, stdio: 'inherit' });
        console.log('✓ TypeScript declarations generated');
      } catch (error) {
        console.error('✗ TypeScript compilation failed:', error);
        throw error;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleHotUpdate({ file, server }: { file: string; server: any }) {
      // Handle hot reloading for SCSS files
      if (file.includes('.scss')) {
        console.log(`🔄 SCSS file changed: ${file}`);
        // Trigger rebuild for SCSS files
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (server as any).ws.send({
          type: 'full-reload'
        });
      }
    },
  };
};

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: './node_modules/.vite/packages/styles',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    scssPlugin(),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'styles',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['sass'],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
