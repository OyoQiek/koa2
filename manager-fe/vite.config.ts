import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      "/api": {
        target: 'http://localhost:3000'
      }
    }
  }
})
