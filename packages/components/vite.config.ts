import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.spec.tsx', 'src/**/*.test.ts', 'src/**/*.test.tsx']
    })
  ],
  resolve: {
    alias: {
      '@mono/styles/scss': path.resolve(__dirname, '../styles/src'),
      '@mono/styles': path.resolve(__dirname, '../styles/src')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@mono/styles/scss/utilities' as utils;`
      }
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MonoComponents',
      formats: ['es'],
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-aria-components'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-aria-components': 'ReactAriaComponents'
        }
      }
    },
    cssCodeSplit: false
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './test-output/vitest/coverage'
    }
  }
});
