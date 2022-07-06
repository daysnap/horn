const { execSync } = require('child_process')
const { rt: rtc, rc } = require('./utils')
const rt = (...args) => rtc('component', ...args)

module.exports = (plop) => {
  plop.setActionType('end', async () => {
    execSync(`npm run entry`)
  })

  plop.setHelper('upperCase', function (text) {
    return text.toUpperCase()
  })

  plop.setGenerator('component', {
    description: '创建一个新Hooks',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
        filter: (v) => (v.toLocaleLowerCase().startsWith('use') ? v : `use-${v}`),
      },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ camelCase name }}/index.ts'),
        templateFile: rt('index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ camelCase name }}/index.md'),
        templateFile: rt('md.hbs'),
      },
      {
        type: 'end',
      },
    ],
  })
}
