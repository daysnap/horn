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
import postCssPxToRem from 'postcss-pxtorem'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

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
      imports: ['vue', 'vue-router', 'vue-i18n'],
      dts: 'typings/auto-imports.d.ts',
      resolvers: [VantResolver()],
    }),

    Components({
      dts: 'typings/components.d.ts',
      extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
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

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve('locales/**')],
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
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
})
