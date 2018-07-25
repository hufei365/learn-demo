// 非 I/O 异步

console.log('start......');

setTimeout(function(){
    console.log('The process has run for: ', process.uptime());
    console.log('setTimeout has been called!');
}, 20000);


// setImmediate(function(){
//     console.log('setImmediate has been called!');
// });

// process.nextTick(function(){
//     console.log('process nextTick has been called!');
// });

// function factory(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(1);
//         }, 2000);
//     })
// }

// const f = factory();
// f.then(function(data){
//     console.log(data);
// })

// 一个一直占用CPU未释放（花费时间较长）的循序
for(var i = 0; i<1999999999;i++){
    i*i;
};

console.log('end!!!!');

process.on('exit', function(){
    console.log(process.uptime());
})