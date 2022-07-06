const { requireFilePath, rc, rt, requireDirname } = require('./utils')

const components = requireDirname(requireFilePath(rc(), true, /\/index\.ts$/))

module.exports = (plop) => {
  plop.setGenerator('entry', {
    description: '创建入口文件',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: rc('index.ts'),
        templateFile: rt('entry.hbs'),
        data: { components },
      },
    ],
  })
}
