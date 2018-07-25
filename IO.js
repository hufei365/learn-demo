var fork = require('child_process').fork;
var fs = require('fs');

console.log('start......');

// blocking
// console.log(fs.readFileSync('test.json', 'utf-8'));

// non blocking
var childProcess = fork('another-thread.js');
childProcess.on('message', function(data){
    console.log(data);
})

console.log('end !!!');