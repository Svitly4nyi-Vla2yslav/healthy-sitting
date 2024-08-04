import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets'
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // розділити основні бібліотеки
          'react-vendor': ['react', 'react-dom'],
          'utility-vendor': ['lodash', 'moment'],
          // або розділити за функціоналом
          'home-page': ['./src/pages/HomePage/HomePage'],
          'contact-page': ['./src/pages/ContactPage/ContactPage'],
          // додайте інші сторінки відповідно
        }
      }
    },
    chunkSizeWarningLimit: 500, // налаштувати ліміт розміру чанків
  },
  base: '/',
});
