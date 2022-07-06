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
    description: '创建一个新组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
        filter: (v) => (v.toLocaleLowerCase().startsWith('hor') ? v : `hor-${v}`),
      },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ dashCase name }}/index.ts'),
        templateFile: rt('index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ dashCase name }}/index.vue'),
        templateFile: rt('vue.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ dashCase name }}/types.ts'),
        templateFile: rt('types.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ dashCase name }}/index.md'),
        templateFile: rt('md.hbs'),
      },
      {
        type: 'end',
      },
    ],
  })
}
