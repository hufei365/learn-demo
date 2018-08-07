// var fs = require('fs');

// function someAsyncOperation(callback) {
//     // 花费18毫秒
//     fs.readFile('./bigfile', callback);
// }

// var timeoutScheduled = Date.now();
// var fileReadTime = 0;

// setTimeout(function () {
//     var delay = Date.now() - timeoutScheduled;
//     console.log('setTimeout: ' + (delay) + "ms have passed since I was scheduled");
//     console.log('fileReaderTime', fileReadtime - timeoutScheduled);
// }, 20);

// setTimeout(function(){
//     var delay = Date.now() - timeoutScheduled;
//     console.log('second setTimeout: ' + (delay) + "ms have passed since I was scheduled");
// }, 2); // 2ms 后进入poll队列， 此时文件读取还未完成，因此该timer的callback会被执行

// someAsyncOperation(function () {
//     fileReadtime = Date.now();
//     while (Date.now() - fileReadtime < 20) {

//     }
//     fn();
// });

// function fn() {
//     var delay = Date.now() - timeoutScheduled;
//     console.log('setTimeout: ' + (delay) + "ms have passed since I was scheduled");
//     if (delay < 2000) { // the Event Loop will block for 2000ms 
//         process.nextTick(fn);
//     }

// }
// setTimeout(function(){
//     process.stdout.write('setTimeout');
// },0)


// setImmediate(function(){
//     process.stdout.write('setImmediate');
// })



const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);

  // use nextTick to emit the event once a handler is assigned
  process.nextTick(() => {
    this.emit('event');
  });
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
