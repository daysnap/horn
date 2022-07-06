import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    legacy({
      targets: ['ie >= 8', 'chrome 52', '> 1%', 'last 2 versions', 'not dead'],
    }),

    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    DefineOptions(),

    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-imports.d.ts',
      resolvers: [VantResolver()],
    }),

    Components({
      dts: 'typings/components.d.ts',
      extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
      resolvers: [
        VantResolver(),
        (componentName) => {
          if (componentName.startsWith('Hor'))
            return { name: componentName, from: '@daysnap/horn-ui' }
        },
      ],
    }),

    Pages({
      dirs: [{ dir: resolve('src/views'), baseRoute: '' }],
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
    }),

    Markdown({
      markdownItSetup(md) {
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
})
