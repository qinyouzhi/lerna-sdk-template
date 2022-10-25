const fs = require('fs');

const getFirstLevelFolder = function (path) {
  return fs.readdirSync(path);
};

const getAllFolder = function (path) {
  const components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    const stat = fs.lstatSync(path + '/' + item);
    if (stat.isDirectory() === true && item !== 'components') {
      components.push(path + '/' + item);
      components.push.apply(components, getAllFolder(path + '/' + item));
    }
  });
  return components;
};

module.exports = {
  getFirstLevelFolder,
  getAllFolder,
};
