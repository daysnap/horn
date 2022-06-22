import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

const resolve = dir => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2015'
  },
  plugins: [
    legacy({
      targets: ['ie >= 8', 'chrome 52', '> 1%', 'last 2 versions', 'not dead']
    }),
    vue(),
    DefineOptions(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [
        VantResolver()
      ],
    }),
    Components({
      resolvers: [
        VantResolver(),
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'src': resolve('src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
})
