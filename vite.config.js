import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        index_en: new URL('./index_en.html', import.meta.url).pathname,
        index_fr: new URL('./index_fr.html', import.meta.url).pathname,
        cv_en: new URL('./cv_en.html', import.meta.url).pathname,
        cv_fr: new URL('./cv_fr.html', import.meta.url).pathname
      },
      output: {
        entryFileNames: '[name].html'
      }
    }
  }
})
