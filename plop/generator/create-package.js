const path = require('path');

const resolve = _ => path.resolve(__dirname, _);

module.exports = {
  description: 'create a packages',
  // 命令式交互配置
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入名称',
      validate: v => {
        if (!v || v.trim === '') {
          return '名称不能为空';
        } else if (v.split('-')[0] !== 'eli') {
          return '为保证目录格式统一，请以"eli-"为开头命名';
        } else {
          return true;
        }
      },
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入描述',
      default: 'description',
    },
    {
      type: 'number',
      name: 'port',
      message: '请输入启动端口',
      default: 9000,
    },
  ],
  // 完成命令行交互后需要执行的一系列动作
  actions: d => {
    const noPrefixName = `${d.name.split('eli-')[1]}`;
    const upperCaseName = d.name.split('-').join('_').toUpperCase();
    const data = { noPrefixName, upperCaseName };
    return [
      // create package
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/index.ts'),
        templateFile: resolve('../templates/create-package/src/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/components/RootProvider/index.tsx'),
        templateFile: resolve('../templates/create-package/src/components/RootProvider/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/components/SvgIcon/index.tsx'),
        templateFile: resolve('../templates/create-package/src/components/SvgIcon/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/components/SvgIcon/interface.ts'),
        templateFile: resolve('../templates/create-package/src/components/SvgIcon/interface.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/modules/{{name}}/index.tsx'),
        templateFile: resolve('../templates/create-package/src/modules/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/services/{{name}}.ts'),
        templateFile: resolve('../templates/create-package/src/services/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/utils/config.ts'),
        templateFile: resolve('../templates/create-package/src/utils/config.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/utils/interceptor.ts'),
        templateFile: resolve('../templates/create-package/src/utils/interceptor.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/utils/request.ts'),
        templateFile: resolve('../templates/create-package/src/utils/request.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/src/utils/utils.ts'),
        templateFile: resolve('../templates/create-package/src/utils/utils.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/LICENSE'),
        templateFile: resolve('../templates/create-package/LICENSE'),
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/package.json'),
        templateFile: resolve('../templates/create-package/package.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/tsconfig.json'),
        templateFile: resolve('../templates/create-package/tsconfig.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../packages/{{name}}/vite.config.ts'),
        templateFile: resolve('../templates/create-package/vite.config.hbs'),
        data,
      },
      // create example
      {
        type: 'add',
        path: resolve('../../examples/{{name}}/index.tsx'),
        templateFile: resolve('../templates/create-package/example/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../examples/{{name}}/index.html'),
        templateFile: resolve('../templates/create-package/example/html.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../examples/{{name}}/routers/index.ts'),
        templateFile: resolve('../templates/create-package/example/routers/index.hbs'),
        data,
      },
      {
        type: 'add',
        path: resolve('../../examples/{{name}}/views/Example.tsx'),
        templateFile: resolve('../templates/create-package/example/views/index.hbs'),
        data,
      },
      // append config
      {
        type: 'append',
        path: resolve('../../config/index.ts'),
        templateFile: resolve('../templates/create-package/config/index.hbs'),
        data,
      },
    ];
  },
};
