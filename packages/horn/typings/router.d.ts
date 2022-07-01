/// <reference types="vite-plugin-pages/client" />
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    depth?: number
    keepAlive?: boolean
  }
}
