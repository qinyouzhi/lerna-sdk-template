module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('create-component', require('./generator/create-component'));
  plop.setGenerator('create-package', require('./generator/create-package'));
};
