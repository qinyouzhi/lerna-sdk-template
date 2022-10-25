const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const argv = process.argv;
const NPM_TOKEN = argv[2];

// token获取方法：vim ~/.npmrc
const npmrcText = `registry=https://registry.npmjs.org/
home=https://www.npmjs.org
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
`;

async function publish() {
  fs.writeFileSync(path.resolve(os.homedir(), '.npmrc'), npmrcText);
  await execCommand(`yarn run release --yes`);
}

async function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(stdout);
    });
  });
}

publish();
