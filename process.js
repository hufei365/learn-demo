console.log(process.argv);

if(process.argv[2]){
    console.log('-----------存在第三个参数-------------')
}

console.log(process.execArgv); // 执行Node程序，传递给Node的参数

console.log(process.env); // 程序运行的当前环境信息

// set process.env
process.env.a = 1;
console.log(process.env.a);


console.log(process.pid); // 进程id
console.log(process.version); // node 版本
console.log(process.platform); // 程序运行平台
console.log(process.execPath); // 可执行文件的绝对路径
console.log(process.memoryUsage()); // 程序资源占用


// event  进出退出前的事件
process.on('beforeExit', function(){
    console.log('before program exit');
});


// 进程退出时，触发的事件
process.on('exit', function(){
    console.log('the program exited');
});


