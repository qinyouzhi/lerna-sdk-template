const shell = require('shelljs');

if (shell.exec('ttsc -p tsconfig.json --target ES5 --module commonjs --outDir lib').code !== 0) {
  shell.echo('Error: lin cjs failed');
  shell.exit(1);
} else {
  shell.cp('-R', 'src/assets', 'lib/');
}
