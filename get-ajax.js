var cp = require('child_process');
var n = null;

console.log('start');
n = cp.fork(`${__dirname}/child-process.js`);
n.on('message', (m) => {
  console.log('父进程收到消息：', m);
});
console.log('end');

// Causes the child to print: CHILD got message: { hello: 'world' }
// n.send({ hello: 'world' });


