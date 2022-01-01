const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/genuary/',
  build: {
    rollupOptions: {
      input: {
        one: resolve(__dirname, '1/index.html')
      }
    }
  }
})
