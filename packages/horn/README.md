# Vue 3 + TypeScript + Vite

## unplugin-vue-components

``` ts
  //自动引入功能 并为你声明组件实例类型 
  Components({
    dirs: ['src/components'],//用于搜索组件的目录的相对路径。默认只查找src里的
    extensions: ['vue'],扩展名
    deep: true,
    resolvers: [],如果你需要引入外部的的ui库需要自定义组件的解析器
    dts: false, 默认不会自动声明，如果你安装了ts默认帮你声明
    directoryAsNamespace: false,允许子目录作为组件的命名空间前缀。
    globalNamespaces: [],
    directives: true,//指令的自动导入//默认值：Vue 3为“true”，Vue 2为“false”//Vue 2的转换需要Babel
    importPathTransform: v => v,//解析前的变换路径
    allowOverrides: false,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  })
```