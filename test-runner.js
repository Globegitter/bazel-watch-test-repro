const { createInterface } = require('readline');
const { exec } = require('child_process');

const executeTests = () => {
  exec("cat test.js", (err, stdout, stderr) => console.log(stdout));
}

const rl = createInterface({input: process.stdin, terminal: true});

rl.on('line', chunk => {
  // console.log('Got line')
  // console.log(chunk)
  // console.log('IBAZEL WRITE');
  if (chunk === IBAZEL_NOTIFY_BUILD_SUCCESS) {
    executeTests();
  }
});
rl.on('close', () => {
  console.error('ibazel stream closed');
  // Give ibazel 5s to kill our process, otherwise do it ourselves
  // setTimeout(() => {
  //   console.error('ibazel failed to stop karma; probably a bug');
  //   process.exit(1);
  // }, 5000);
});


const IBAZEL_NOTIFY_BUILD_SUCCESS = 'IBAZEL_BUILD_COMPLETED SUCCESS';

executeTests();
