# horn
vue3 box


## lerna

[点击跳转](https://zhuanlan.zhihu.com/p/404166248)

### 安装

```bash
$ lerna bootstap
```


```bash
$ lerna publish # 用于发布更新
$ lerna publish --skip-git # 不会创建git commit或tag
$ lerna publish --skip-npm # 不会把包publish到npm上
```

### 为packages文件夹下的package安装依赖

```bash
$ lerna add <package>[@version] [--dev] # 命令签名

# 例如
$ lerna add module-1 --scope=module-2 # 将 module-1 安装到 module-2
$ lerna add module-1 --scope=module-2 --dev # 将 module-1 安装到 module-2 的 devDependencies 下
$ lerna add module-1 # 将 module-1 安装到除 module-1 以外的所有模块
$ lerna add babel-core # 将 babel-core 安装到所有模块
```

```bash
$ lerna exec -- <command> [..args] # 在所有包中运行该命令

# 例如
$ lerna exec --scope=npm-list  yarn remove listr # 将 npm-list 包下的 listr 卸载
$ lerna exec -- yarn remove listr # 将所有包下的 listr 卸载
```

### lerna.json解析

```json5
{
  "packages": [
    "components/*"
  ],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true,
  "command": {
    "bootstrap": {
      "ignore": "",
      "npmClientArgs": ""
    },
    "publish": {
      "ignoreChanges": [
        "ignored-file",
        "*.md"
      ]
    }
  }
}
```
version：当前库的版本

useWorkspaces: 是否使用workspace来管理依赖
npmClient： 允许指定命令使用的client， 默认是 npm， 可以设置成 yarn
command.publish.ignoreChanges：可以指定那些目录或者文件的变更不会被publish
command.bootstrap.ignore：指定不受 bootstrap 命令影响的包
command.bootstrap.npmClientArgs：指定默认传给 lerna bootstrap 命令的参数
command.bootstrap.scope：指定那些包会受 lerna bootstrap 命令影响
packages：指定包所在的目录
