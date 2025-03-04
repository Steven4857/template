import { defineConfig } from 'vite'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [
    cesium() // 自动处理Cesium资源
  ],
  optimizeDeps: {
    include: ['cesium']
  },
  base: './', // 相对路径部署
  build: {
    chunkSizeWarningLimit: 2000, // 调整chunk大小限制
    assetsInlineLimit: 0 // 禁用小文件base64编码
  }
})
