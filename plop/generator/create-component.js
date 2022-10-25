const path = require('path');
const folder = require('../utils/folder');

const resolve = _ => path.resolve(__dirname, _);

module.exports = {
  description: 'create a component',
  prompts: [
    {
      type: 'list',
      name: 'packageName',
      message: '请选择所属package',
      choices: folder.getFirstLevelFolder('packages'),
    },
    {
      type: 'input',
      name: 'componentName',
      message: '请输入组件名称',
      validate: v => {
        if (!v || v.trim === '') {
          return '组件名称不能为空';
        } else {
          return true;
        }
      },
    },
  ],
  actions: () => {
    return [
      {
        type: 'add',
        path: resolve(`../../packages/{{packageName}}/src/components/{{properCase componentName}}/index.tsx`),
        templateFile: resolve('../templates/create-component/index.hbs'),
      },
      {
        type: 'add',
        path: resolve(`../../packages/{{packageName}}/src/components/{{properCase componentName}}/interface.ts`),
        templateFile: resolve('../templates/create-component/interface.hbs'),
      },
    ];
  },
};
