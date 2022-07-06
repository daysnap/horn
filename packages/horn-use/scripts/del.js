const { execSync } = require('child_process')
const rimraf = require('rimraf')
const { rc } = require('./utils')

module.exports = (plop) => {
  plop.setGenerator('remove', {
    description: '删除一个Hooks',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
        filter: (v) => (v.toLocaleLowerCase().startsWith('use') ? v : `use-${v}`),
      },
      { type: 'confirm', name: 'ok', message: '确认删除？' },
    ],
    actions: (res) => {
      const { name, ok } = res
      if (ok) {
        const dirname = plop.getHelper('camelCase')(name)
        console.log('dirname => ', dirname)
        rimraf.sync(rc(dirname))
        console.log('✔ 删除成功')
        execSync('npm run entry')
      }
      return []
    },
  })
}
