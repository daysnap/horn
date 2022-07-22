/// <reference types="unplugin-vue-define-options" />
/// <reference types="vant" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let BMapGL: any
declare let BMAP_STATUS_SUCCESS: any
